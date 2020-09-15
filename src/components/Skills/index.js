

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Chip, ListItem, Divider, Accordion, AccordionSummary, AccordionDetails, List } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: 'none',
    maxWidth: '100%',
    padding: '1em',
    backgroundColor: '#EB8989',
    color: '#1C3A3E'
  },
  typography: {
    textAlign: 'center',
    margin: '0',
    fontSize: '1em',
    padding: '0'
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
    { key: 0, label: 'HTML5' },
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
    { key: 0, label: 'MySQL' },
    { key: 1, label: 'MongoDB | Mongoose' },
    { key: 2, label: 'JavaScript | jQuery' },
    { key: 3, label: 'Node.js' },
    { key: 4, label: 'Express.js' },
    { key: 4, label: 'Passport.js' },
    { key: 4, label: 'Babel' },
    { key: 5, label: 'Azure' },
  ];
  const tools = [
    { key: 0, label: 'Visual Studio | Visual Studio Code' },
    { key: 1, label: 'Git | Git Bash | GitHub' },
    { key: 2, label: 'Slack' },
    { key: 3, label: 'NPM' },
    { key: 3, label: 'Yarn' },
    { key: 3, label: 'StackOverflow' },
  ];
  const vw = window.innerWidth || document.documentElement.clientWidth;

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  if (vw >= 1024) {
    return (
      <Paper id='skills'>
        <ListItem>
          <Typography variant='overline' className={classes.typography}>Frontend</Typography>
          {frontend.map((data) => {


            return (
              <li key={data.key}>
                <Chip
                  label={data.label}
                  className='chip'
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
                  className='chip'
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
                  className='chip'
                />
              </li>
            );
          })}
        </ListItem>

      </Paper>
    );
  } else {
    return (
      <div>
      <Accordion id="skills" square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='overline' className={classes.typography}>Frontend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>
            {frontend.map((data) => {
              return (
                <li key={data.key}>
                  <Chip
                    label={data.label}
                    className='chip'
                  />
                </li>
              );
            })}
          </ListItem>
        </AccordionDetails>
      </Accordion>
      <Accordion id="skills" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant='overline' className={classes.typography}>Backend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>
            {backend.map((data) => {
              return (
                <li key={data.key}>
                  <Chip
                    label={data.label}
                    className='chip'
                  />
                </li>
              );
            })}
          </ListItem>
        </AccordionDetails>
      </Accordion>
      <Accordion id="skills" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant='overline' className={classes.typography}>Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>
            {tools.map((data) => {
              return (
                <li key={data.key}>
                  <Chip
                    label={data.label}
                    className='chip'
                  />
                </li>
              );
            })}
          </ListItem>
        </AccordionDetails>
      </Accordion>
      </div>
    );
  }
}
