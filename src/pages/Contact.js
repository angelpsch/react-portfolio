import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/HeaderTabs'; 

export default class Contact extends Component {

    render() {
        return (
            <div>

                <Helmet>
                    <title>Contact Me</title>
                    <meta name="description" content="Contact Me" />
                </Helmet>

                <Header title='Contact Me' />
            </div>
        );
    }


}
