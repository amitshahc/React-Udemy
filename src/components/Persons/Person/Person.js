import React from 'react';
//import { Component } from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am a {props.person.name} Constant Person. Age: {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>        
    );
}

// class person extends Component{
//     render() {
//         return (
//             <div>
//                 <p>I am a {this.props.name} Class Person. Age: {this.props.age} </p>
//                 <p>{this.props.children}</p>
//             </div>
//         );
//     }
// }

export default person;