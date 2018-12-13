import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: "Max", age: 23 },
      { name: "Mame", age: 29 },
      { name: "Chrish", age: 25 },
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

  render() {

    const button_style = {
      border: '1px solid blue',
      padding: '5px'
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (<div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.stateChangeHandler.bind(this, "Maximilian")} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangeHandler}>Meme content</Person>
      </div> )
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
