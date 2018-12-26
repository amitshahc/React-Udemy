import React, { Component } from 'react';
import Radium from 'radium';
import Person from './Person/Person';
import './App.css';
import moduleStyles from './css/app.module.css';
// import person from './Person/Person';

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

  nameChangeHandler = (id, event) => {
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
      padding: '5px',
      ':hover': {
        backgroundColor: 'lightblue'
      }
    };

    const cssClass = [];

    if (this.state.persons.length <= 2) {
      cssClass.push('red');
      button_style.backgroundColor = 'red';
      button_style[":hover"] = {
        backgroundColor: 'lightyellow'
      }
    }
    if (this.state.persons.length <= 1) {
      cssClass.push('bold');
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (<div>
        {
          this.state.persons.map( (person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePerson(index)}
              change={(event) => this.nameChangeHandler(person.id, event)} />
          })
        }          
      </div>
      )
    }
    return (
      <div className="App">
        <h1 className={moduleStyles.bgColor}>My React App</h1>
        <p className={cssClass.join(' ')}>This is paragraph.</p>
        <button onClick={this.togglePersons} style={button_style}>Click</button>
        {persons}        
      </div>
    );
  }
}

export default Radium(App);
