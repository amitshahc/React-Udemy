import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      { name: "Max", age: 23 },
      { name: "Mame", age: 29 },
    ]
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

  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <button onClick={this.stateChangeHandler}>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.stateChangeHandler.bind(this, "Maximilian")} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangeHandler}>Meme content</Person>
      </div>
    );
  }
}

export default App;
