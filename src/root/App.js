import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
    let persons = null;

    if (this.state.showPerson) {
      persons = (        
          <Persons            
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.nameChangeHandler}
          />        
      );
    }
    return (
      <div className="App">
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          click={this.togglePersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
