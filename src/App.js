import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <Person name="Max" age="23" />
        <Person name="Meme" age="29">Meme content</Person>
      </div>
    );
  }
}

export default App;
