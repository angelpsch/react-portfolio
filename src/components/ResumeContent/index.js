import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import Summary from '../Summary'
import Education from '../Education'; 
import Experience from '../Experience';
import Skills from '../Skills'; 
import '../styles.scss'

const useStyles = makeStyles({
    root: {
        margin: '0 auto',
        marginTop: '1em',
        color: '#1C3A3E',
        padding: '5px',
        paddingBottom: '2em',
        textAlign: 'center'
    }, // a style rule

  });

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    background: '#1C3A3E',
    color: '#00695f',
   
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
     
    '&$expanded': {
      margin: '12px 0',
    },

  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    
  },
}))(MuiAccordionDetails);


export default function CustomizedAccordions(props) {
    const classes = useStyles(props);

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography  variant='h3'>Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            <Summary />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant='h3'>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.root}>
            <Education></Education>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant='h3'>Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.root}>
            <Experience></Experience>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant='h3'>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.root}>
            <Skills />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
