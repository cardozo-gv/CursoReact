import React from 'react';

function Producto(props){
  return(
    <div>
      <h1>{props.nombre}</h1>
      <h3>{props.precio}</h3>
    </div>
  )
}


export default Producto;
