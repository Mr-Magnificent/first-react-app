/*
* always import React and as well as Component
*
* */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    /*
    *
    * To tasks to perform berfore the mounting is written berfore render
    *
    * */

    hello () {
        console.log("hello");
    }

    componentWillMount() {
        console.log("in componentWillMount");
    }

    componentDidMount() {
        console.log("in componentDidMount");
        this.hello();
    }
    
  render() {
      console.log('in render');
    return (
        /*
        *
        * return null if there is nothing to return otherwise gives an error
        *
        * */
      <ul>
          <li>Devendu</li>
          <li>ayush</li>
          <li>person 3</li>
      </ul>
    );
  }
}

export default App;
