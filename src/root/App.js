import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import './App.css';
//import person from '../components/Persons/Persons/Person';

class App extends Component {
  state = {
    persons : [
      { id:'1', name: "Max", age: 23 },
      { id:'2', name: "Mame", age: 29 },
      { id:'3', name: "Chrish", age: 25 },
    ],
    showPerson: false
  }

  stateChangeHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Mame", age: 30 },
      ]
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })

    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    const persons = [ ...this.state.persons ];

    person.name = event.target.value;

    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersons = () => {
    let show = this.state.showPerson;
    this.setState({showPerson: !show });
  }

  deletePerson = (personIndex) => {
    console.log(personIndex);
    let persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    const button_style = {
      border: '1px solid blue',
      padding: '5px'
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons            
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>My React App</h1>
        <button onClick={this.togglePersons} style={button_style}>Click</button>
        {persons}        
      </div>
    );
  }
}

export default App;
