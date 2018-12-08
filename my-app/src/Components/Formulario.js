import React, {Component} from 'react';


class Formulario extends Component{
  constructor(){
    super();
    this.state = {
      name:"",
      terms:false,
    }
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}></input>
        <div>
          <label>
            <input type="checkbox" checked={this.state.terms} onClick={this.handleCheckbox.bind(this)}/> Acepto los terminos
          </label>
        </div>
        <button onClick={this.sayHi.bind(this)}>Say hi</button>
      </div>

    )
  }

  handleCheckbox(e){
    this.setState({
      terms: e.target.checked
    })
  }

  updateName(e){
    this.setState({
      name:e.target.value,
    })
  }

  sayHi(){
    if(this.state.terms){
        alert("hola " + this.state.name);
    }else{
      alert("debes aceptar los términos")
    }

  }
}

export default Formulario;
