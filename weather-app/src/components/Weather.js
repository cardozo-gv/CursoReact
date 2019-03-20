import React, { Component } from 'react';


class Weather extends Component{
  render(){
    return(
      <div className="weather">
        {
          this.props.city && this.props.country &&
          <p className="key">Location:
            <span className="value">{this.props.city}, {this.props.country}</span>
          </p>
        }
        {
          this.props.humidity &&
          <p className="key">Humidity:
            <span className="value">{this.props.humidity}</span>
          </p>
        }
        {
          this.props.temperature &&
          <p className="key">Temperature:
            <span className="value">{this.props.temperature}</span>
          </p>
        }
        {
          this.props.description&&
          <p className="key">Description:
            <span className="value">{this.props.description}</span>
          </p>
        }
        {
          this.props.error &&
          <p className="key">
            <span className="value">{this.props.error}</span>
          </p>
        }
      </div>
    )
  }
}

export default Weather;
