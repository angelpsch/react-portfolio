import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/HeaderTabs'; 
import { Paper, TextField, Button } from '@material-ui/core';
import axios from 'axios';

 
export default class Contact extends Component {
    
    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
      }

      resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    render() {
        
        return (
            <div>

                <Helmet>
                    <title>Angel Schultz : Contact Me</title>
                    <meta name="description" content="Contact Me" />
                </Helmet>

                <Header title='Contact Me' />
            
            <div className='contact'>
           
            <Paper elevation={2} id='contact'> 
            <form className='form' onSubmit={ (e) => this.formSubmit(e)}>
                    
                <TextField
                    required
                    className='contactInput'
                    label="Name"
                    onChange={e => this.setState({ name: e.target.value})} 
                    name='name'
                    variant="filled"
                    color='primary'
                    />
                <TextField
                    required
                    className='contactInput'
                    label="E-mail"
                    onChange={e => this.setState({ email: e.target.value})} 
                    name='email'
                    variant="filled"
                    color='primary'
                    />
                <TextField
                    className='contactInput'
                    label="Phone"
                    onChange={e => this.setState({ email: e.target.value})} 
                    name='phone'
                    variant="filled"
                    color='primary'
                    />
                <TextField
                    multiline
                    rows={4}
                    className='contactInput'
                    label="Put message here..."
                    onChange={e => this.setState({ message: e.target.value})} 
                    name='name'
                    variant="filled"
                    color='primary'
                    />
                    <Button variant="contained" type='submit'>
                    {this.state.buttonText}
                    </Button>
                </form>
            </Paper>
        </div>
            </div>
        );
    }


}
