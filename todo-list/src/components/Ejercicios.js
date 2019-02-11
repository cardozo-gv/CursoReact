import React,{ Component } from 'react';
import '../App.css';

//import Joke from './Joke';
//import productsData from '../productsData';
//import Producto from './Producto';
//import Header from './Header';
//import Greeting from './Greeting';
//import Estado from './Estado';
//import Conditional from './Conditional';
//import Formulario from './FormularioContainer';

import TodoItem from './TodoItem';
import todoData from '../todoData';


 class Ejercicios extends Component{
   constructor(){
     super();
     this.state = {
       items: todoData
     }
     this.handleChanged = this.handleChanged.bind(this);
   }

   handleChanged(id){
     this.setState(prevState => {
       const updatedTodos = prevState.items.map(todo => {
         if(todo.id === id){
           todo.compleated = !todo.compleated;
         }
         return todo;
       })
       return {
         items : updatedTodos
       }
     });
   }

   render(){
     //  const productos = productsData.map(prod => <Producto nombre={prod.nombre} precio={prod.precio} key={prod.id}/>);
       const items = this.state.items;
       const data = items.map(todo => <TodoItem key={todo.id} item={todo}
                                       itemChanged = {this.handleChanged} />);
       return (
         <div className="App">
           {data}

         </div>
       );
   }
}

export default Ejercicios;
