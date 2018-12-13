import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import person from './Person/Person';

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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 23 },
        { name: event.target.value, age: 30 },
      ]
    });
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
      persons = (<div>
        {
          this.state.persons.map( (person, index) => {
            return <Person name={person.name} age={person.age} key={person.id} click={() => this.deletePerson(index)} />
          })
        }          
      </div>
      )
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
