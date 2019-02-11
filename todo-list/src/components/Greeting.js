import React, { Component } from 'react';


class Greeting extends Component{
  render(){
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay;
    if(hour < 13){
      timeOfDay = "Morning"
    }else if(hour > 12 && hour < 21){
      timeOfDay = "Afternoon"
    }else{
      timeOfDay = "Night"
    }
    return(
      <div>
        <h1>Good {timeOfDay} to you, sir or madam</h1>
      </div>
    )
  }
}

export default Greeting;
