import React, { Component } from 'react';
import PropTypes from 'prop-types';


//Data
import items from './data/menu';

//Components
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  static propTypes = {
    children : PropTypes.object.isRequired
  };
  render() {
    const {children} = this.props;
    return (
      <div>
      <Header title="Probando React :)"  items={items}/>

      <Content body={children}/>

      </div>
    );
  }
}

export default App;
