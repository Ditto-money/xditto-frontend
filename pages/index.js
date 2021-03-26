import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MintForm from '../components/MintForm'
import RedeemForm from '../components/RedeemForm'


const useStyles = makeStyles((theme) => ({
  mintForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%',
  },
  inputField: {
    width: '40%',
  },
  tabs: {
    justifyContent: 'center',
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const StyledTabs = withStyles({
  root: {
    '& > *': {
      justifyContent: 'center',
    },
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 90,
      width: '100%',
      backgroundColor: '#ED7AC0',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(22),
    marginRight: theme.spacing(5),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);



export default function Index() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box>
      <Box marginY={3}>
        <StyledTabs centered="true" value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Mint xDITTO" />
          <StyledTab label="Redeem DITTO" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </Box>
      <TabPanel value={value} index={0}>
        <MintForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RedeemForm />
      </TabPanel>
    </Box>
  );
}
