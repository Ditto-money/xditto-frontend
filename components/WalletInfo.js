

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import IconButton from '@material-ui/core/IconButton';

import Image from 'next/image'


import {
    useWeb3React,
    UnsupportedChainIdError
} from "@web3-react/core";

import { useDarkmode } from '../lib/ui-context';

import {
    injected,
} from '../lib/connectors'


const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1.5%',
    },
}));

export default function WalletInfo({ dittoBalance, xDittoBalance, exchangeRate, usdPrice }) {

    const classes = useStyles();
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

    console.log(usdPrice);

    const [dittoPrice, setDittoPrice] = React.useState(usdPrice);

    return (
        <Box postion="absolute" position="absolute" top="30%" right="7.5%" display="flex" flexDirection="column" alignItems="center">
            <Typography color="primary" variant="h6">DITTO in wallet</Typography>
            {
                account === undefined
                    ?
                    <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{'...'}</Typography>
                    :
                    account === null
                        ?
                        <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{None}</Typography>
                        :
                        <Box textAlign='center'>
                            <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{`${dittoBalance} DITTO`}</Typography>
                            <Typography color="textPrimary" variant="body2" style={{ paddingTop: '5px' }}>{`${usdPrice * dittoBalance} USD`}</Typography>
                        </Box>

            }
            <Typography color="primary" variant="h6" style={{ paddingTop: '40px' }}>xDITTO in wallet</Typography>
            {
                account === undefined
                    ?
                    <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{'...'}</Typography>
                    :
                    account === null
                        ?
                        <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{None}</Typography>
                        :
                        <Box textAlign='center'>
                            <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{`${xDittoBalance} xDITTO`}</Typography>
                            <Typography color="textPrimary" variant="body2" style={{ paddingTop: '5px' }}>{`${(usdPrice * exchangeRate) * xDittoBalance} USD`}</Typography>
                        </Box>


            }
            <Typography color="primary" variant="h6" style={{ paddingTop: '40px' }}>Exchange rate</Typography>
            {
                account === undefined
                    ?
                    <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{'...'}</Typography>
                    :
                    account === null
                        ?
                        <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{Unavailable}</Typography>
                        :
                        <Typography color="textPrimary" variant="body2" style={{ paddingTop: '10px' }}>{`1 xDITTO = ${exchangeRate} DITTO`}</Typography>
            }
        </Box>
    );
};
