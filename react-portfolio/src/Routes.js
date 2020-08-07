import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'; 

// Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


export default class Routes extends Component {
render(){
     return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/resume'>
                        <Resume />
                    </Route>
                    <Route path='/portfolio'>
                        <Portfolio />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
                
            </div>
        );
}
    }
