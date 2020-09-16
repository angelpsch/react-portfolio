import React, { Component } from 'react';
import ResumeContent from '../components/ResumeContent';
import { Helmet } from 'react-helmet';
import Header from '../components/HeaderTabs'; 
import Links from '../components/Links'
export default class Resume extends Component {
        
      render(){
            return (
        <div>
                <Header title='Resume'/>

                 <Helmet>
                <title>Angel Schultz : Resume</title>
                <meta name="Resume" content="My Resume" />
                </Helmet> 
                <ResumeContent />
                <Links />
               
            </div>
        );  
      }
        
    

}
