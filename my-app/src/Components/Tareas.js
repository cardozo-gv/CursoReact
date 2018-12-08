import React, {Component} from 'react';

/* https://www.youtube.com/watch?v=gSOEknWAvfU   */

class Tareas extends Component {
  constructor(){
    super();
    this.state = {
      tasks : ["Tarea 1", "Tarea 2"]
    }
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.tasks.map((task,i) =>
            <li>{task}</li>
          )}
        </ul>
        <button onClick={this.addTask}>Agregar elemento</button>
        <button onClick={this.updateTask}>Actualizar Tarea 2</button>
        <button onClick={this.removeTask}>Eliminar Tarea 2 </button>
      </div>
    )
  }

  addTask(){
    this.setState({
      tasks: this.state.tasks.concat("nuevo Elemento"),
    })
  }

  updateTask(){
    const index = this.state.tasks.findIndex(task => task === "Tarea 6");
    console.log("OOOOOOOOOOOOOOOOO"+index);
    /*
    this.setState({
      tasks: this.state.tasks.map((task,i) =>
        i == index ? "Actualizado" : task

      )
    })*/

    /* SEGUNDA version */

    /*this.setState({
      tasks : this.state.tasks
              .slice(0,index)
              .concat("Actualizado")
              .concat(this.state.tasks.slice(index + 1))
    })*/

    /*TERCER VERSION */

    this.setState({
      tasks: [
        ...this.state.tasks.slice(0,index),
        "Actualizado",
        ...this.state.tasks.slice(index + 1)
      ]
    })

  }

  removeTask(){
    const tasks = this.state.tasks;
    const index = tasks.findIndex(task => task === "Tarea 2");

  /*  this.setState({
      tasks: tasks.filter((task, i) =>
        index !== i)
    })*/

    /*SEGUNDA VERSION */
    /* this.setState({
       tasks: tasks
              .slice(0,index)
              .concat(tasks.slice(index + 1))
     })*/

   /*TERCERA VERSION */

   this.setState({
     tasks: [
       ...tasks.slice(0,index),
       ...tasks.slice(index + 1)
     ]
   })
  }




}

export default Tareas;
