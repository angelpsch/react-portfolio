import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, withRouter } from "react-router-dom";
import ListAltIcon from '@material-ui/icons/ListAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';

import '../styles.scss'; 


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#009688',
    color: '#00695f',
   
  },
  tabs: {
      color: '#fff',
      borderBottom: 'none'
  }
});


export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



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
            <Tab icon={<HomeIcon />} label="Home" className ={classes.tabs}/>
        </Link>
        <Link to={'/resume'} className='navItem'>
            <Tab icon={<ListAltIcon />} label="Resume" className ={classes.tabs}/>
        </Link>
        <Link to={'/portfolio'} className='navItem'>
            <Tab icon={<AppsIcon />} label="Portfolio" className ={classes.tabs}/>
        </Link>
        <Link to={'/contact'} className='navItem'>
            <Tab icon={<ChatIcon />} label="Contact" className ={classes.tabs}/>
        </Link>
   
      </Tabs>
    </Paper>
  );
}
