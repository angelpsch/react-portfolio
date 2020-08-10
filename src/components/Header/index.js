import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Logo from '../Logo'
import { Link, withRouter } from "react-router-dom";
import ListAltIcon from '@material-ui/icons/ListAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';


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


export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
  
    <Paper className={classes.root}>
        <Logo></Logo>
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
        <Link to={'/'}>
            <Tab icon={<HomeIcon />} label="Home" className ={classes.tabs}/>
        </Link>
        <Link to={'/resume'}>
            <Tab icon={<ListAltIcon />} label="Resume" className ={classes.tabs}/>
        </Link>
        <Link to={'/portfolio'}>
            <Tab icon={<AppsIcon />} label="Portfolio" className ={classes.tabs}/>
        </Link>
        <Link to={'/contact'}>
            <Tab icon={<ChatIcon />} label="Contact" className ={classes.tabs}/>
        </Link>
   
      </Tabs>
    </Paper>
  );
}
