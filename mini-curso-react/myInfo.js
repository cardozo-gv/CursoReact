/* https://www.youtube.com/watch?v=DLX62G4lc44 capitulo 8  */


function SobreMi(){
  return(
    <div>
      <h2>Sobre Mi</h2>
      <p>Mi nombre es Griselda Cardozo, tengo 40 años y soy programadora de software
         en este momento me encuentro aprendiendo sobre React</p>
    </div>
  )
}

function TopVisitar(){
  return(
    <div>
      <h2>Lugares que me gustarían visitar</h2>
      <ul>
        <li>Machu pichu</li>
        <li>ibiza</li>
        <li>Paris</li>
      </ul>
    </div>
  )
}

function MyInfo(){
  return(
    <div>
        <h1>Griselda Cardozo</h1>
        <SobreMi/>
        <TopVisitar/>
    </div>

  )
}

ReactDOM.render(<MyInfo/>,document.getElementById('app'));
