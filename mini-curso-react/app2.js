/*
STATE
=====

Las propiedades son inmutables no pueden cambiar.
Los estados son mutables y son encapsulados por el componente al que pertence
Es decir los estados se crean, se actualizan, se modifican dentro del componente al que pertenece.

Para que un componente tenga estado es necesario crearlo mediante clases.
*/

/*class Hello extends React.Component { // Clase sin estado
  constructor(props){
    super(props)
  }

  render(){
    return(
      <h1>{this.props.saludo}</h1>
    )
  }
}

ReactDOM.render(<Hello saludo="Hola Mundo"/>, document.getElementById('app'))
*/

/* ***************************************************************************************/

class Hello extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      nombre : "Griselda",
    }
    this.despedirse = this.despedirse.bind(this);
  }

  despedirse(){
    this.setState({
      nombre: "Verónica",
    })
  }

  render(){
    return(
      <h1 onClick={this.despedirse}>Hola {this.state.nombre}</h1>
    )
  }
}

ReactDOM.render(<Hello/>, document.getElementById('app'))
