import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';



import CampsiteFinder from '../images/campsitefinder.PNG';
import EmployeeDirect from '../images/EmployeeDirect.PNG';
import Squid from '../images/StackSquid.PNG';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto', 
    marginTop: '1em',
    color: '#1C3A3E',
    padding: '5px',
    paddingBottom: '2em'
    
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
  icon: {
    color: '#1C3A3E',
  },
  links: {
    margin: '0.5em',
    maxWidth: '100%',
    textDecoration: 'none',
    background:'#1C3A3E',
    textAlign: 'center',
    color: '#00695f'
},
container: {
    margin: '0 auto',
    width: 'fit-content'
}
}));

const projectData = [
    {
        img: CampsiteFinder, 
        title: 'Campsite Finder',
        url: 'https://huhndaniel.github.io/campsite-finder'
    },
    {
        img: Squid, 
        title: 'StackSquid',
        url: 'https://squidstack.herokuapp.com/'
    },
    {
        img: '', 
        title: 'Decision Maker App - In Progress',
        url: 'https://github.com/hansbrougha/decision-maker-app'
    },
    // {
    //     img: EmployeeDirect, 
    //     title: 'Employee Directory Example',
    //     url: 'https://angelpsch.github.io/employee-directory-react/'
    // },
  
    
]
const exampleData = [
    {
        img: CampsiteFinder, 
        title: 'Campsite Finder',
        url: 'https://huhndaniel.github.io/campsite-finder'
    },
    {
        img: Squid, 
        title: 'StackSquid',
        url: 'https://squidstack.herokuapp.com/'
    },
    {
        img: '', 
        title: 'Decision Maker App - In Progress',
        url: 'https://github.com/hansbrougha/decision-maker-app'
    },
    // {
    //     img: EmployeeDirect, 
    //     title: 'Employee Directory Example',
    //     url: 'https://angelpsch.github.io/employee-directory-react/'
    // },
  
    
]
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


export default function AdvancedGridList() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Typography variant='h3' classname={classes.type}>
      <FontAwesomeIcon icon={['fad', 'user-friends']} /> Team Projects
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
      <GridList cellHeight={500} cellWidth={700} spacing={3} cols={3} className={classes.root}>
        {projectData.map((tile) => (
          <GridListTile key={tile.img} >
            <img src={tile.img} alt={tile.title} component='img' className={classes.img}/>
            <GridListTileBar
              title={<Typography className={classes.titleBar} variant='button'>
              {tile.title}
          </Typography>}
              titlePosition="bottom"
              actionIcon={
                <IconButton aria-label={`Go to ${tile.title}`} className={classes.icon}>
                   
                  <Typography variant='overline' >
                    <a href={tile.url} className={classes.icon} target="_blank">Go to Website</a>
                  </Typography>
                 
              
                  <ExitToAppIcon />
                </IconButton>}
              actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
        </GridList>
        </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
      <Typography variant='h3' classname={classes.type}>
      <FontAwesomeIcon icon={['fad', 'user']} /> Individual Projects
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
      <GridList cellHeight={500} cellWidth={700} spacing={3} cols={3} className={classes.root}>
        {exampleData.map((tile) => (
          <GridListTile key={tile.img} >
            <img src={tile.img} alt={tile.title} component='img' className={classes.img}/>
            <GridListTileBar
              title={<Typography className={classes.titleBar} variant='button'>
              {tile.title}
          </Typography>}
              titlePosition="bottom"
              actionIcon={
                <IconButton aria-label={`Go to ${tile.title}`} className={classes.icon}>
                   
                  <Typography variant='overline' >
                    <a href={tile.url} className={classes.icon} target="_blank">Go to Website</a>
                  </Typography>
                 
              
                  <ExitToAppIcon />
                </IconButton>}
              actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
        </GridList>
        </AccordionDetails>
        </Accordion>

        
      </div>

  );
}
