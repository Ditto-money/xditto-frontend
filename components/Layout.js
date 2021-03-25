import React from 'react';
import { ethers } from 'ethers'

import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';

import {
    useWeb3React,
    UnsupportedChainIdError
} from "@web3-react/core";
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector";

import XDITTO_ABI from '../lib/contract/abi.json'
import DITTO_ABI from '../lib/contract/DITTOAbi.json'
import { useDarkmode } from '../lib/ui-context';
import { useEagerConnect, useInactiveListener } from "../lib/injected-connector-hooks";

import { lightTheme, darkTheme } from '../theme';

import Header from './Header'
import WalletInfo from './WalletInfo'






function getErrorMessage(error) {
    if (error instanceof NoEthereumProviderError) {
        return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
    } else if (error instanceof UnsupportedChainIdError) {
        return "You're connected to an unsupported network.";
    } else if (
        error instanceof UserRejectedRequestErrorInjected ||
        error instanceof UserRejectedRequestErrorWalletConnect ||
        error instanceof UserRejectedRequestErrorFrame
    ) {
        return "Please authorize this website to access your Ethereum account.";
    } else {
        console.error(error);
        return "An unknown error occurred. Check the console for more details.";
    }
}


export default function Layout({ children }) {
    const darkmodeContext = useDarkmode();
    const theme = darkmodeContext.darkmode ? darkTheme : lightTheme;

    const context = useWeb3React();
    const {
        connector,
        library,
        chainId,
        account,
        activate,
        deactivate,
        active,
        error
    } = context;

    const [activatingConnector, setActivatingConnector] = React.useState();
    React.useEffect(() => {
        console.log('running')
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect();
    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector);

    const [exchangeRate, setExchangeRate] = React.useState();
    const [xDittoBalance, setXDittoBalance] = React.useState();
    const [dittoBalance, setDittoBalance] = React.useState();

    React.useEffect(() => {
        const getXDittoValues = async () => {
            const xDittoContract = new ethers.Contract('0xB0a1DE764A033A76f28E821fBe402EDBFEe937dB', XDITTO_ABI, library.getSigner());
            const exchangeRate = await xDittoContract.getRedeemAmount(ethers.BigNumber.from("1000000000000000000"));
            const xDittoBalance = await xDittoContract.balanceOf(account);
            const formattedXDittoBalance = ethers.utils.formatUnits(xDittoBalance, 18)
            const formattedExchangeRate = ethers.utils.formatUnits(exchangeRate, 9);
            setXDittoBalance(formattedXDittoBalance);
            setExchangeRate(formattedExchangeRate);
        }

        const getDittoBalance = async () => {
            const dittoContract = new ethers.Contract('0x233d91a0713155003fc4dce0afa871b508b3b715', DITTO_ABI, library.getSigner());
            const dittoBalance = await dittoContract.balanceOf(account);
            const formattedDittoBalance = ethers.utils.formatUnits(dittoBalance, 9);
            setDittoBalance(formattedDittoBalance);
        }

        if (library) {
            getXDittoValues();
            getDittoBalance();
        }
    }, [library, chainId]);


    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor="background.default" height="100vh">
                <Header setActivatingConnector={setActivatingConnector} getErrorMessage={getErrorMessage} />
                <WalletInfo dittoBalance={dittoBalance} xDittoBalance={xDittoBalance} exchangeRate={exchangeRate} />
                {children}
            </Box>
        </ThemeProvider>
    );
}
