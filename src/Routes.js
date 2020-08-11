import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from './components/HeaderTabs'; 

// Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


export default class Routes extends Component {
render(){
     return (
            <div>
                <Switch>
                    <Route exact path='react-portfolio/' pathname="Angel Schultz" component={Home}>
                        <Home />
                    </Route>
                    <Route path='/resume' component={Resume}>
                        <Resume />
                    </Route>
                    <Route path='/portfolio' component={Portfolio}>
                        <Portfolio />
                    </Route>
                    <Route path='/contact' component={Contact}>
                        <Contact />
                    </Route>
                </Switch>
                
            </div>
        );
}
    }
