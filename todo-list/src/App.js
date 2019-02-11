import React,{ Component } from 'react';
import './styles.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator'

class App extends Component{
  constructor(){
    super();
  }


  render(){
    return (
      <div>
        <Header/>
        <MemeGenerator/>
      </div> );
    }
  }

  export default App;
