import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Paper, Typography, Grid} from '@material-ui/core';
import Profile from '../images/profile-img-2.jpg'; 
import '../styles.scss'; 

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        marginTop: '2em',
      '& > *': {
        margin: '0 auto',
      },
    },

  }));
  

export default function HomeContent(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
          <Paper id='paper'>
            <h1 className="title">Hello there.</h1>
            <Grid container
            spacing={1} 
            direction='column'
            justify='flex-start'>
              <Grid item justify='center'>
                <Avatar alt="Angel Schultz" src={Profile} id="profile"/>
              </Grid>
               <Grid item >
                  <h3 className='subtitle'>My name is Angel. I am a full stack web developer.</h3>
               </Grid>
            </Grid>
           
          </Paper>
        </div>
    );
}