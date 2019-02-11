import React from 'react'


function Joke(props){
  return(
    <div className="joke">
      <h1 style={{ display:props.question ? "block" : "none" }}>{props.question}</h1>
      <h3>{props.punchLine}</h3>
    </div>
  )

}

export default Joke;
