import React, { Component } from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am a {props.name} Constant Person. Age: {props.age} </p>
            <p>{props.children}</p>
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