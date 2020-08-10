import React, { Component } from 'react'; 
import  '../../App.scss'; 
export default class Logo extends React.Component {
    state = {
      title: this.props.title
    };


 render() {
  return (
   <div>
     <h1>{this.state.title}</h1>
   </div>
  );
 }
}

 