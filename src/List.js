import React, { Component } from 'react';

class List extends Component{

    /*
    *
    * creates a constructor and calls the super of props i.e constructor of component
    *
    * */
    constructor(props) {
        super(props);
        // console.log(props);
    }



    renderList() {
        console.log((this.props));
        let curr = "A";
        let result = [];
        for (let i = 0; i < this.props.number; i++) {
            result.push((
                <li>{curr}</li>
            ));
            curr = String.fromCharCode(curr.charCodeAt(0) + 1);
        }
        return (result);
    };

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;