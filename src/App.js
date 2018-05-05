import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Mohamed", age: 24},
            {name : "Smith", age: 17},
            {name: "Ashely", age: 21},
            {name: "William", age: 23}
        ],

        otherState: 'Some other value'
    };

    switchNameHandler = (newName) => {
        // console.log("was click!");
        // Do Not Do This: this.state.person[0].name = "John";
        this.setState({persons: [
            {name: newName, age: 45},
            {name : "Smith", age: 17},
            {name: "Ashely", age: 21},
            {name: "John", age: 32}
        ]})
    };

    nameChangeHandler = (event) => {
        this.setState({persons: [
                {name: 'Max', age: 28},
                {name : event.target.value, age: 17},
                {name: "Stephanie", age: 16}
            ]})
    };

  render() {
      return (
          <div className="App">
              <h1>Hi, I am a React App</h1>
              <p>Hey, my name is Mohamed Keita and I am a React App developer.
                  Programming is great for any one.
              </p>
              {/*When using a arrow function, this implicitly adds a return keyword in front*/}
              {/*of the code which come directly after the arrow*/}
              <button className={'Button'} onClick={() => this.switchNameHandler('Tarnue!!')}>Switch Name</button>
              <Person
                  name = {this.state.persons[0].name}
                  age = {this.state.persons[0].age} />
              <Person
                  name = {this.state.persons[1].name}
                  age = {this.state.persons[1].age}
                  // Commonly use this method insted of {() => this.switchNameHandler('Tarnue')}
                  click = {this.switchNameHandler.bind(this, 'Hassan')}
                  changed = {this.nameChangeHandler} > My hobbies: Gaming, Dancing, and Running </Person>
              <Person
                  name = {this.state.persons[2].name}
                  age = {this.state.persons[2].age}/>

          </div>
      );
  }
}
export default App;
