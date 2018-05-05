import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
      return (
          <div className="App">
              <h1>Hi, I am a React App</h1>
              <p>Hey, my name is Mohamed Keita and I am a React App developer.
                  Programming is great for any one.
              </p>
              <Person />
          </div>
      );
  }
}
export default App;
