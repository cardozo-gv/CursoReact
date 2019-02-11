import React from 'react';


const styles = {
  compleated : {
    background:'green'
  },

  incompleated:{
    backgroundColor:"red"
  },

  pcompleated:{
    textDecoration : "line-through",
    fontStyle : "italic",
    color : '#cdcdcd'
  }
}


function TodoItem (props){

  return(

    <div className="todo-item" style={props.item.compleated ? styles.compleated : styles.incompleated}>
      <input type="checkbox" name="todo1" defaultChecked={props.item.compleated} onChange={()=>props.itemChanged(props.item.id)}/>

      <p style={props.item.compleated ? styles.pcompleated : null} >{props.item.text}</p>
      <h3>{props.item.compleated ? " completado " : " incompleto "}</h3>
    </div>
  )

}


export default TodoItem;
