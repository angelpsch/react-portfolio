

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: 'none',
    width: '100%',
    padding: '1em',
    backgroundColor:'#EB8989',
    color: '#1C3A3E'
  },
  typography: {
      textAlign: 'center',
      margin: '0',
      fontSize: '1em'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  divider: {
      backgroundColor: '#1C3A3E'
  }
}));

export default function ChipsArray() {
  const classes = useStyles();
  const frontend = [
    { key: 0, label: 'HTML5'},
    { key: 1, label: 'CSS3' },
    { key: 2, label: 'JavaScript | jQuery' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Boostrap' },
    { key: 5, label: 'Bulma' },
    { key: 6, label: 'Sass (node-sass)' },
    { key: 7, label: 'Pug | Jade' },
    { key: 8, label: 'Material UI' },
    { key: 8, label: 'WordPress' },
  ];
  const backend = [
    { key: 0, label: 'MySQL'},
    { key: 1, label: 'MongoDB | Mongoose' },
    { key: 2, label: 'JavaScript | jQuery' },
    { key: 3, label: 'Node.js' },
    { key: 4, label: 'Express.js' },
    { key: 4, label: 'Passport.js' },
    { key: 4, label: 'Babel' },
    { key: 5, label: 'Azure' },
  ];
  const tools = [
    { key: 0, label: 'Visual Studio | Visual Studio Code'},
    { key: 1, label: 'Git | Git Bash | GitHub' },
    { key: 2, label: 'Slack' },
    { key: 3, label: 'NPM' },
    { key: 3, label: 'Yarn' },
    { key: 3, label: 'StackOverflow' },
  ];


  return (
    <Paper className={classes.root}>

      <ListItem>
        <Typography variant='overline' className={classes.typography}>Frontend</Typography>
      {frontend.map((data) => {


        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              className={classes.chip}
            />
          </li>
        );
      })}
      </ListItem>
      <Divider className={classes.divider} />
      <ListItem>
        <Typography variant='overline' className={classes.typography}>Backend</Typography>
      {backend.map((data) => {


        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              className={classes.chip}
            />
          </li>
        );
      })}
      </ListItem>
      <Divider className={classes.divider} />
      <ListItem>
        <Typography variant='overline' className={classes.typography}>Tools</Typography>
      {tools.map((data) => {


        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              className={classes.chip}
            />
          </li>
        );
      })}
      </ListItem>
    </Paper>
  );
}
