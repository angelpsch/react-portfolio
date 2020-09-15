import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paperOne: {
        padding: '1em',
        width: '100%',
        backgroundColor:'#EB8989',
        color: '#1C3A3E',
  
  },
  paperTwo: {
        padding: '1em',
        margin: 'auto 0',
        width: '91%',
        backgroundColor: '#FFA88E',
        color: '#1C3A3E',

  },
  dateOne: {
      color: '#EB7472',
      fontSize: '1.5em'
  },
  dateTwo: {
      color: '#FFA88E',
      fontSize: '1.5em'
  },
  employer: {
      fontStyle: 'italic'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align='alternate'>
        {/* 1 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="overline" className={classes.dateOne}>
            Dec 2017 - Aug 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paperOne}>
            <Typography variant="h6">
              Office Assistant
            </Typography>
            <Typography className={classes.employer}>Garrison Law Office</Typography>
            <Typography>Carried out administrative tasks such as updating ledgers, electronic case filing, and processing payments.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/*  */}
        {/* 2 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="overline" className={classes.dateTwo}>
            Jan 2017 - Dec 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paperTwo}>
            <Typography variant="h6">
              Assistant to Field Operations
            </Typography>
            <Typography className={classes.employer}>Titan Protection & Consulting</Typography>
            <Typography>Assisted Director in Fields Operations in tasks such as tracking all employee licensing and training.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/*  */}
          {/*  3*/}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="overline" className={classes.dateOne}>
            Mar 2016 - Mar 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paperOne}>
            <Typography variant="h6">
              Social Media Specialist
            </Typography>
            <Typography className={classes.employer}>The Merit Group Indy, LLC.</Typography>
            <Typography>Planned, scheduled and executed social media campaigns for new or growing companies.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/*  */}
        {/*  4*/}
        <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="overline" className={classes.dateTwo}>
           Nov 2015 - Mar 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paperTwo}>
            <Typography variant="h6">
              Territory Manager
            </Typography>
            <Typography className={classes.employer}>MUDD Advertising</Typography>
            <Typography>Eighty cold calls per day to car dealerships to promote marketing campaigns.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/*  */}
      
    </Timeline>
  );
}
