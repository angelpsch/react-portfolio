import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Paper, Tabs, Typography, Tab, Box, } from '@material-ui/core/';
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import '../styles.scss'; 


const useStyles = makeStyles({
  root: {
    backgroundColor: '#009688',
   
  },
  tabs: {
      borderBottom: 'none',
      margin: 'auto',
      textAlign: 'center',
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

  const activeColor = '#1C3A3E';
  const inactiveColor = '#ffffff';
  const vw = window.innerWidth || document.documentElement.clientWidth;

if (vw > 425){
  return (
  
    <Paper square className={classes.root}>
      <h1 className="logo">{props.title}</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor={activeColor}
        centered
        aria-label="icon label tabs"
      >
        <Link to={'/'} className='navItem'>
          <TabPanel className='navbar-item'>
            <FontAwesomeIcon icon={['fad', 'home']} className="icon"/><br />
            <Typography  variant='overline'>Home</Typography>
          </TabPanel>
        </Link>
        <Link to={'/resume'} className='navItem'>
        <TabPanel className='navbar-item'>
            <FontAwesomeIcon icon={['fad', 'file-alt']}/><br />
            <Typography  variant='overline'>Resume</Typography>
          </TabPanel>
        </Link>
        <Link to={'/portfolio'} className='navItem'>
        <TabPanel className='navbar-item'>
            <FontAwesomeIcon icon={['fad', 'code']}/><br />
            <Typography  variant='overline'>Work</Typography>
          </TabPanel>
        </Link>
        <Link to={'/contact'} className='navItem'>
        <TabPanel className='navbar-item'>
            <FontAwesomeIcon icon={['fad', 'walkie-talkie']}/><br />
            <Typography  variant='overline'>Contact Me</Typography>
          </TabPanel>
        </Link>
   
      </Tabs>
    </Paper>
  );} else {

  }

}
