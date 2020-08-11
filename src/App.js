import React, { Component } from 'react';
import 'fontsource-roboto';
import './App.scss'; 
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'


library.add(fab, fas, fad); 


export default class App extends Component {
  
  render(){
    return (
      
      <div>
        
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

        </div>
  );
  }
  
}



