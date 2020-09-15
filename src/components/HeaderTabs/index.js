import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Paper, Tabs, Typography, Tab, Box, } from '@material-ui/core/';
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import '../styles.scss'; 


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#009688',
    color: '#00695f',
   
  },
  tabs: {
      color: '#fff',
      borderBottom: 'none',
      fontSize: '2em',
      margin: '0.25em'
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const vw = window.innerWidth || document.documentElement.clientWidth;

if (vw > 425){
  return (
  
    <Paper className={classes.root}>
      <h1 className="logo">{props.title}</h1>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor=""
        textColor="#FFFFFF"
        centered
        aria-label="icon label tabs"
      >
        <Link to={'/'} className='navItem'>
          <TabPanel className={classes.tabs}>
            <FontAwesomeIcon icon={['fad', 'home']} label="Home"/>
            <Typography variant='overline'>Home</Typography>
          </TabPanel>
        </Link>
        <Link to={'/resume'} className='navItem'>
          <FontAwesomeIcon icon={['fad', 'file-alt']} label="Home" className ={classes.tabs}/>
            {/* <Tab icon={<ListAltIcon />} label="Resume" className ={classes.tabs}/> */}
        </Link>
        <Link to={'/portfolio'} className='navItem'>
            {/* <Tab icon={<AppsIcon />} label="Portfolio" className ={classes.tabs}/> */}
        </Link>
        <Link to={'/contact'} className='navItem'>
            {/* <Tab icon={<ChatIcon />} label="Contact" className ={classes.tabs}/> */}
        </Link>
   
      </Tabs>
    </Paper>
  );} else {

  }

}
