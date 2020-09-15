import React, { Component, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/HeaderTabs'; 
import HomeContent from '../components/HomeContent'
export default class Home extends Component {
    
    render(){
        return (
        <div>
            <Header title='Angel Schultz'/>
            <Helmet>
                <title>Angel Schultz</title>
                <meta name="description" content="Homepage" />
            </Helmet> 
            <HomeContent></HomeContent>
    
        </div>
       
    ) }

}


