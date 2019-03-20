import React,{ Component } from 'react';


class Title extends Component{
  render(){
    return(
      <div className="title-container">
        <div className="title">
          <h1>Wheather finder</h1>
          <p className="subtitle">Find out temperature, conditions and more...</p>
        </div>

      </div>
    )
  }
}

export default Title;
