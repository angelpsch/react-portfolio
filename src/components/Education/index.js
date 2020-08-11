import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paperOne: {
          padding: '1em',
          width: '100%',
          backgroundColor:'#EB8989',
          color: '#1C3A3E'
    },
    paperTwo: {
          padding: '1em',
          marginRight: '1em',
          width: '90%',
          backgroundColor: '#FFA88E',
          color: '#1C3A3E'
    },
    dateOne: {
        color: '#EB7472',
        fontSize: '1em'
    },
    dateTwo: {
        color: '#FFA88E',
        fontSize: '1em'
    },
    school: {
        fontStyle: 'italic'
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    }
  }));

export default function Education() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Timeline align="alternate">
    {/* 1 */}
  <TimelineItem>
    <TimelineOppositeContent>
      <Typography variant="overline" className={classes.dateOne}>
        August 2020
      </Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
    <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Paper elevation={3} className={classes.paperOne}>
        <Typography variant="h6">
          Full Stack Web Developer Certification
        </Typography>
        <Typography className={classes.school}>University of Kansas</Typography>
        <Typography>Overland Park, KS</Typography>
      </Paper>
    </TimelineContent>
  </TimelineItem>
  {/*  */}
    {/* 2 */}
  <TimelineItem>
    <TimelineOppositeContent>
      <Typography variant="overline" className={classes.dateTwo}>
        December 2019
      </Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
    <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Paper elevation={3} className={classes.paperTwo}>
        <Typography variant="h6">
          Associate of General Studies
        </Typography>
        <Typography className={classes.school}>Johnson County Community College</Typography>
        <Typography>Overland Park, KS</Typography>
      </Paper>
    </TimelineContent>
  </TimelineItem>
  {/*  */}
      {/*  3*/}
  <TimelineItem>
    <TimelineOppositeContent>
      <Typography variant="overline" className={classes.dateOne}>
        May 2014
      </Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
    <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Paper elevation={3} className={classes.paperOne}>
        <Typography variant="h6">
          High School Diploma
        </Typography>
        <Typography className={classes.school}>Valley Lutheran High School</Typography>
        <Typography>Cedar Falls, IA</Typography>
      </Paper>
    </TimelineContent>
  </TimelineItem>
  {/*  */}
  </Timeline>
  );
}
