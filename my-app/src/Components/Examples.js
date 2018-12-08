import React, {Component} from 'react';
import Welcome from './Welcome.js';


class Examples extends Component{
  constructor(){
    super();

    this.state = {
      title: "Hola Mundo desde estado",
    }
    this.changeTitle = this.changeTitle.bind(this)
  }

  render() {
    const names = ["Zulma","Anitta","Susana"];

    return (
      <div>
        <h1>Hola Mundo</h1>
        <Welcome name="Gri"/>

        {names.map(name =>
          <Welcome name={name}/>
        )}

        <ul>
          {names.map(name =>
          <li>{name}</li>)}
        </ul>

        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Cambiar Titulo (estado)</button>

      </div>
      )
  }

  changeTitle(){
    this.setState({
      title: "Cambiaste el título, bien hecho!!!"
    });
  }
}



export default Examples;
