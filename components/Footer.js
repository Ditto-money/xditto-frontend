

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

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
                <Box display="flex" alignItems="center" paddingLeft={5} width="15%" justifyContent="space-between">
                    <a href="https://t.me/dittomoney" target="_blank"><FontAwesomeIcon icon={faTelegram} size="2x" style={{ color: '#ED7AC0' }} /></a>
                    <a href="https://dittomoney.medium.com" target="_blank"><FontAwesomeIcon icon={faMedium} size="2x" style={{ color: '#ED7AC0' }} /></a>
                    <a href="https://twitter.com/dittomoney_" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#ED7AC0' }} /></a>
                    <a href="https://github.com/Ditto-money/" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#ED7AC0' }} /></a>
                </Box>
                <Box display="flex" alignItems="center" paddingRight={'5%'}>
                    <Typography color="textPrimary">First elastic supply token on BSC <br /> Copywhat? 2021 Ditto.money</Typography>
                </Box>
            </Box>
        </Box>




    );
};