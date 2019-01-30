import React from 'react';
import { Component } from 'react';
import './Person.css';

// const person = (props) => {
//         return (
//             <div className="Person">
//                 <p onClick={props.click}>I am a {props.name} Constant Person. Age: {props.age} </p>
//                 <p>{props.children}</p>
//                 <input type="text" onChange={props.change} value={props.name} />
//             </div>        
//         );
//     }


class Person extends Component{
    render() {
        return (
            <div className="Person">
                <p onClick={this.props.click}>I am a {this.props.name} Constant Person. Age: {this.props.age} </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div> 
        );
    }
}

export default Person;