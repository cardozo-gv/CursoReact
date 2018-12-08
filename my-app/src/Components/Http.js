import React, {Component} from 'react';
import axios from 'axios';


class Http extends Component{
  constructor(){
    super();

    this.state = {
      names : [],
    }

    axios.get('http://localhost:3001/names')
    .then(response => {
      this.setState({
        names : response.data,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){
    return (
      <div>
        <ul>
          {this.state.names.map((name,key) =>
            <li>{name}</li>
          )}
        </ul>

      </div>
    )
  }
}

export default Http;
