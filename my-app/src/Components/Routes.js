import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;
const PageNotFound = () => <h2>Página no encontrada</h2>
const Mensaje = (props) => <h2>Mensaje {props.match.params.id}</h2>

class Routes extends Component{
  render(){
    return(
      <div>
        <div><Nav/></div>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
          <Route path="*" component={PageNotFound}/>
          <Route path="/mensaje/:id" component={Mensaje}/>
        </div>
      </div>



    );
  }
}

export default Routes;
