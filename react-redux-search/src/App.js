import React, { Component } from 'react';
import ResultsContainer from './containers/ResultsContainer';
import Details from './containers/DetailsContainer';
import './App.css';

import {Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/results" component={ResultsContainer}/>
          <Route path="/details/:itemId" component={Details}/>
          <Redirect from="/" to="/results"/>
        </Switch>
      </div>
    );
  }
}

export default App;
