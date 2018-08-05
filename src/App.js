/*
* always import React and as well as Component
* filename must start using first capital letter "App.js" "List.js"
* */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {

    constructor(props) {
        super(props);

        /*
        * state is IMMUTABLE
        * --> on change state rerender is called*/
        this.state = {
            number: 6,
            listEnabled: true
        };
    }

    addTodoList = () => {
        const { number } = this.state;
        this.setState({
            number : number + 1
        })
    };

    deleteTodoEle = () => {
        const {number} = this.state;
        if (number === 0) {
            return null;
        }
        this.setState ({
            number: number - 1
        })
    };

    /*
    * Deconstruct is called when there is a change in the virtualDom and
    * Dom present in browser
    *
    * */

    toggleList = () => {
        const {listEnabled} = this.state;
        this.setState({
            listEnabled: !listEnabled
        })
    };

  render() {

        const {number} = this.state;
        const {listEnabled} = this.state;
    return (
        /*
        *
        * return null if there is nothing to return otherwise gives an error
        *
        * */
        <div>
            {listEnabled && <List number={number}/>}
            <button onClick={this.addTodoList}>Add</button>&nbsp;
            <button onClick={this.deleteTodoEle}>Delete</button>&nbsp;
            <button onClick={this.toggleList}>Toggle List</button>
        </div>
    );
  }
}

export default App;
