import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ["Zulma","Anitta","Susana"];

    return (
      <div>
        <h1>Hola Mundo</h1>

        <ul>
          {names.map(name =>
          <li>{name}</li>)}
        </ul>
      </div>
      )


  }
}

export default App;