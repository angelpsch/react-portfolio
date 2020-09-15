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
        // margin: '0 auto',
        // marginTop: '1em',
        // color: '#1C3A3E',
        // padding: '5px',
        // paddingBottom: '2em',
        // textAlign: 'center',
    }, // a style rule

  });

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    background: '#1C3A3E',
    color: '#00695f',
    textAlign: 'center',
   
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
    textAlign: 'center',
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
    <div className='resumeContainer'>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h1 className='title'>Summary</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            <Summary />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <h1 className='title'>Education</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='resumeContent'>
            <Education></Education>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h1 className="title">Experience</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='resumeContent'>
            <Experience></Experience>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <h1 className="title">Skills</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='resumeContent'>
            <Skills />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
