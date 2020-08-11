import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
          padding: '1em',
          margin: '0 auto',
          width: '60%',
          backgroundColor:'#FFA88E',
          color: '#1C3A3E'
    }
}));

export default function Summary() {
    const classes = useStyles();

    return(
        <Paper elevation="3" className={classes.root}>
            <Typography>Passionate, hardworking and resourceful Full Stack Web Developer with a specialty in UI/UX design. Experience implementing mobile-first design strategies through frameworks such as Bulma, Bootstrap, and Material UI integrated with node-sass, Handlebars, Pug/Jade, and/or React. Experience using package managers such as Yarn and npm. Working knowledge of backend technologies includes server-side Node.js development with tools like Express.js and Passport.js, and database development through MySQL, Microsoft Azure, or MongoDB with Mongoose. Insight into collaborating on a team where Git Bash and GitHub was used for source control management and the primary mode of communication was through Slack. </Typography>
        </Paper>
    );
  }