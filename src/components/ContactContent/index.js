import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';


import '../styles.scss'; 

const GlobalCss = withStyles({
    '@global': {
      '.MuiInputBase-root': {
        fontSize: '1rem',
      },
    },
  })(() => null);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: '0 auto',
            marginTop: '1em',
            width: '80%',
            height: theme.spacing(16),
            backgroundColor: '#1C3A3E', 
            primary: '#6bcfc2'
        },
        '& .MuiFormLabel-root' : {
            color: '#00695f',
          },
          '& .MuiFilledInput-underline:after': {
              color: '#00695f',
                borderBottom: '#00695f 1px solid'

            
             
          }
    },
    form: {
        margin: '0 auto',
        paddingTop: '2em', 
        width: '60%'
    }
}));

// // For contact form submit
// const formSubmit = (e) => {
//     e.preDefault()

//     this.setState({
//         buttonText: '...sending'
//     })

//     let data = {
//         name: this.state.name,
//         email: this.state.email,
//         message: this.state.message
//     }

//     axios.post('API_URI', data)
//         .then(res => {
//             this.setState({ sent: true }, this.resetForm())
//         })
//         .catch(() => {
//             console.log('Message not sent')
//         })
// }

// const resetForm = () => {
//     this.setState({
//         name: '',
//         message: '',
//         email: '',
//         buttonText: 'Message Sent'
//     })
// }




export default function Contact({value, handleChange, handleSubmit}) {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
           
            <Paper elevation={2}> 
            <form className='form' onSubmit={ (e) => this.formSubmit(e)}>
                    
                <TextField
          required
          label="Name"
          onChange={handleChange}
          name='name'
          variant="filled"
          color='primary'
          value={value}
        />
                </form>
            </Paper>
        </div>
    );
}