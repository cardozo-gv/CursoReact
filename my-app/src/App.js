/*Canal youtube Make it Real */

import React, { Component } from 'react';
import './App.css';

import Tareas from './Components/Tareas.js';
import Examples from './Components/Examples';
import Formulario from './Components/Formulario';
import Http from './Components/Http';
import BsExample from './Components/BsExample';

class App extends Component {

  render() {
    return (
      <div>

        <Formulario/>
        {/*<Tareas/> */}
        {/*<Http/> */}
        {/*<Formulario/> */}
        <BsExample/>

      </div>
      )
  }

}

export default App;
