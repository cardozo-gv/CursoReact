import React, { Component } from 'react';



class Conditional extends Component{
  constructor(){
    super();
    this.state = {
      isLogged : false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    return(
      <div>
        <input type="button"  value={this.state.isLogged ? "Log out" : " Log in " } onClick={this.handleClick}/>
        <h1>{this.state.isLogged ? "Log in" : "Log out"}</h1>
      </div>);
    }


    handleClick(){
      this.setState(prevState => {
        return {
          isLogged : !prevState.isLogged
        }
      })
    }
  }
  export default Conditional;
