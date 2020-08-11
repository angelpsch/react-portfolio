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


import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
  root: {
    width: '40%',
    margin: '0 auto',
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
  pug: {
      display: 'inline',
      fontFamily: 'arvo, serif',
      fontWeight: 700
  },
  bulma: {
      display: 'inline',
      fontFamily: 'korolev-rounded'
  },
  jquery: {
      fontFamily: 'dunbar-text, sans-serif',
      fontWeight: 800,
      display: 'inline'
  },
  express: {
      fontFamily: 'open-sans, sans-serif',
      fontWeight: 300,
      display: 'inline'
  },
  links: {
      margin: '0.5em',
      width: 'fit-content',
      padding: '0.5em',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      background:'#FFA88E',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '1em',
      color: '#1C3A3E'
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
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h3" component="h1">
          <FontAwesomeIcon icon={['fad', 'archive']} /> Other Portfolios
          <Divider />
        </Typography>
        <div className={classes.container}>
        <Paper className={classes.links} component='a' href="https://angelpsch.github.io/updated-portfolio/" target="_blank">
        
          <FontAwesomeIcon icon={['fab', 'html5']} />
          <Typography className={classes.jquery}> jQuery </Typography>
          <FontAwesomeIcon icon={['fab', 'js-square']}/>
          <Typography className={classes.bulma}> BULMA </Typography>
          <FontAwesomeIcon icon={['fab', 'sass']} />
       </Paper>
        <Paper className={classes.links} component='a' href="https://angelpsch-updated-portfolio-20.herokuapp.com/" target="_blank">

          <Typography className={classes.pug}>pug </Typography>
          <Typography className={classes.jquery}> jQuery </Typography>
          <FontAwesomeIcon icon={['fab', 'js-square']}/>
          <Typography className={classes.express}> Express.js </Typography>
          <Typography className={classes.bulma}> BULMA </Typography>
          <FontAwesomeIcon icon={['fab', 'sass']} />
       </Paper>
       </div>
      </CardContent>
    </Card>
  );
}