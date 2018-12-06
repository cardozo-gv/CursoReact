import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component{

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>

          <ul className="Menu">
            {this.props.items && this.props.items.map((item,key) => <li key={key}>
              <Link to={item.url}>
                {item.title}
              </Link>

            </li>)}

          </ul>
        </header>
      </div>

    )
  }
}

export default Header;
