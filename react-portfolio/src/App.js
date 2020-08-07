import React, { Component } from 'react';
import Home from './pages/Home'; 
import 'fontsource-roboto';
import './App.scss'; 
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";




export default class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
  );
  }
  
}



