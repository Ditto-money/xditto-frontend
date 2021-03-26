

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

export default function WalletInfo({ dittoBalance, xDittoBalance, exchangeRate }) {

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

    return (
        <Box postion="absolute" position="absolute" top="35%" right="5%" display="flex" flexDirection="column" alignItems="center">
            <Typography color="textPrimary">DITTO in wallet</Typography>
            {
                account === undefined
                    ?
                    <Typography color="textPrimary">{'...'}</Typography>
                    :
                    account === null
                        ?
                        <Typography color="textPrimary">{None}</Typography>
                        :
                        <Typography color="textPrimary">{dittoBalance}</Typography>
            }
            <Typography color="textPrimary" style={{ paddingTop: '40px' }}>xDITTO in wallet</Typography>
            {
                account === undefined
                    ?
                    <Typography color="textPrimary">{'...'}</Typography>
                    :
                    account === null
                        ?
                        <Typography color="textPrimary">{None}</Typography>
                        :
                        <Typography color="textPrimary">{xDittoBalance}</Typography>
            }
            <Typography color="textPrimary" style={{ paddingTop: '40px' }}>Exchange rate</Typography>
            {
                account === undefined
                    ?
                    <Typography color="textPrimary">{'...'}</Typography>
                    :
                    account === null
                        ?
                        <Typography color="textPrimary">{None}</Typography>
                        :
                        <Typography color="textPrimary"> {exchangeRate}</Typography>
            }
        </Box>
    );
};
