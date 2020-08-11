import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';


import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
  root: {
    width: '40%',
    margin: '1em auto',
    marginTop: '1em',
    backgroundColor: '#1C3A3E',
    color: '#00695f'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }, 
  img: {
    margin: '0 auto',
    minWidth: '100%',

  },
  titleBar: {
    margin: '0 auto', 
    textAlign: 'left',
    background:
      '#FFA88E',
    color: '#1C3A3E',
  },
  typography: {
    display: 'inline',
    
  },
  links: {
      margin: '0.5em',
      width: 'fit-content',
      padding: '0em 0.1em',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      background:'#FFA88E',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '2.5em',
      color: '#1C3A3E',
      '&hover': {
        backgroundColor: '#EB8989'[500],
        transitionDuration: '1ms',
      }
  },
  container: {
    margin: '0 auto',
    width: 'fit-content'
}

});


export default function SimpleCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2" component="h2"> 
          <FontAwesomeIcon icon={['fad', 'hashtag']} title='Profiles'/>
          <Divider />
        </Typography>
        <div className={classes.container}>
        <Paper className={classes.links} component='a' title="Linkedin Profile: https://www.linkedin.com/in/angelpschultz/" href="https://www.linkedin.com/in/angelpschultz/" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
       </Paper>
        <Paper className={classes.links} component='a' title="GitHub Profile: https://github.com/angelpsch" href="https://github.com/angelpsch" target="_blank">
          <FontAwesomeIcon icon={['fab', 'github-square']} />
       </Paper>
       </div>
      </CardContent>
    </Card>
  );
}
