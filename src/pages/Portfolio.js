import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/HeaderTabs'
import PortfolioContent from '../components/PortfolioContent'
import OtherPortfolios from '../components/OtherPortfolios'
export default class Portfolio extends Component {
    render(){
         return (
            <div>
                <Header title='Portfolio' />
                <Helmet>
                <title>Portfolio</title>
                <meta name="description" content="My Portfolio" />
                </Helmet>
                <PortfolioContent />

                <OtherPortfolios />
            </div>
        );
    }
    }
       


