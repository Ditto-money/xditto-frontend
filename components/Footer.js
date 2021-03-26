

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

export default function Footer({ setActivatingConnector, getErrorMessage }) {
    const darkmodeContext = useDarkmode();

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
        <Box position='sticky' top="85%">
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center" paddingLeft={'5%'}>
                    <Image
                        src="/images/ditto.png"
                        alt="Main Ditto logo mascot"
                        width={'100%'}
                        height={'100%'}
                    />
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" paddingLeft={5}>
                    <Typography color="textPrimary">First elastic supply token on BSC <br /> Copywhat? 2021 Ditto.money</Typography>
                    <Typography color="textPrimary">First elastic supply token on BSC <br /> Copywhat? 2021 Ditto.money</Typography>
                    <Typography color="textPrimary">First elastic supply token on BSC <br /> Copywhat? 2021 Ditto.money</Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" paddingRight={'5%'}>
                    <Typography color="textPrimary">First elastic supply token on BSC <br /> Copywhat? 2021 Ditto.money</Typography>
                </Box>
            </Box>
        </Box>




    );
};
