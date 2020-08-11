import React, { Component, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/HeaderTabs'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
export default class Home extends Component {
    
    render(){
        return (
        <div>
            <Header title='Angel Schultz'/>
            <Helmet>
                <title>Angel Schultz</title>
                <meta name="description" content="Homepage" />
            </Helmet> 
            
    
        </div>
       
    ) }

}


