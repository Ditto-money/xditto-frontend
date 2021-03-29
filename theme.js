import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

let lightTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Rubik',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h3: {
            fontWeight: 700
        }
    },
    palette: {
        primary: {
            main: '#ED7AC0',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#FFF9FF',
        },
        text: {
            primary: '#000000',
            secondary: '#000000'
        }
    },
});

let darkTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Rubik',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h3: {
            fontWeight: 700
        },
    },
    palette: {
        primary: {
            main: '#ED7AC0',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#4F1538',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF'
        }
    },
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);


export { lightTheme, darkTheme };