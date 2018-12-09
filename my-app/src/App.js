/*Canal youtube Make it Real */

import React, { Component } from 'react';
import './App.css';

import Tareas from './Components/Tareas.js';
import Examples from './Components/Examples';
import Formulario from './Components/Formulario';
import Http from './Components/Http';
import BsExample from './Components/BsExample';
import Routes from './Components/Routes';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Routes/>
        </Router>


      </div>
      )
  }

}

export default App;
