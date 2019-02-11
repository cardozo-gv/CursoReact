import React, { Component } from 'react';
import FormularioComponent from './FormularioComponent'



class Formulario extends Component{
  constructor(){
    super();
    this.state = {
      firstname : "",
      lastname : "",
      age : "",
      gender : "",
      location:"",
      isVegan : false,
      isKosher : false,
      isLactosaFree : false

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === 'checkbox' ?
    this.setState({
      [name]:checked
    })
    :
    this.setState({
      [name]:value
    })

  }
  render(){
    return(
      <div>
        <FormularioComponent handleChange = {this.handleChange} data={this.state}/>
      </div>
    )
  }
}

export default Formulario;
