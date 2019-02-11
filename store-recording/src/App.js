import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductsList from './components/ProductsList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

/*tutorial de  https://www.youtube.com/watch?v=wPQ1-33teR4
instalamos bootstrap npm install --save bootstrap*/

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ProductsList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
