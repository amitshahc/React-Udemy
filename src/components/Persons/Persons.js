import React from 'react';
import { Component } from 'react';
import Person from './Person/Person';

// const persons = (props) => 
//     props.persons.map((person, index) => {
//         return (            
//             <Person
//                 key={person.id}
//                 name={person.name}
//                 age={person.age}                    
//                 click={() => props.clicked(index)}                    
//                 change={(event) => props.changed(event, person.id)}
//             />            
//         )
//     });


class Persons extends Component{
    render() {
        return this.props.persons.map((person, index) => {
            return (            
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}                    
                    click={() => this.props.clicked(index)}                    
                    change={(event) => this.props.changed(event, person.id)}
                />            
            )
        });       
    }
}
export default Persons;