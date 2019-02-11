import React, {Component} from 'react';


class Estado extends Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn : true
    }
  }

  render(){
    var log = "out";
    if(this.state.isLoggedIn){
      log = "in"
    }
    return(
      <div>
        <h1>You are currently logged {log}</h1>
      </div>
    )
  }

}

export default Estado;
