/*
*Vainilla JS
*
*/

//const el = document.createElement('h1');
//el.setAttribute('id', 'title');
//el.textContent = "Hola Mundo";
//document.getElementById('app').appendChild(el);


/*
*
*React example
*/

//const el = React.createElement('h1' //elemento que queremos crear
//,{id:'title'},                      //propiedades
////'Hola Mundo'                        //hijos
//'Hola ',
//React.createElement('span',null,'mundo')
//);
//ReactDOM.render(el,document.getElementById('app'));


/*
* con React y JSX
*
*/
//const el = <h1 id="title">Hola <span> mundo </span></h1>
//ReactDOM.render(el,document.getElementById('app'));

/*
* Reloj con javaScript
*
*/

const app = document.getElementById('app');

//function reloj(){
//  app.textContent = new Date().toLocaleTimeString();
//}
//setInterval(reloj,1000);

/*
* Reloj con JSX
*
*/

/*
function reloj(){
  let now = new Date().toLocaleTimeString();
  const el = <span>{now}</span>;
  ReactDOM.render(el,app);
}
setInterval(reloj,1000);
*/

function Saludar(props){
  return <h1>Hola {props.name}</h1>

}

const User = props => {
  return (
    <div>
      <img src={props.img} alt={props.name}/>
      <p>{props.name}</p>
    </div>
  )
}

const Avatar = props => <img src={props.user.img} alt={props.user.name}/>;

const UserName = props => <p>{props.user.name}</p>;

const User2 = props => {
  return (
    <div className="user-item">
      <Avatar user={props.user}/>
      <UserName user={props.user}/>
    </div>
  )
}

const user = {
  name : "Arturito",
  img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSysaJZpd7zn3yWMvevq0QouWrdBVSgWO3mRLcXIVU6s6fMAYTgQ'
};

const users = [
  {
    name : "jorgito",
    img :'https://kzkggaara.files.wordpress.com/2010/08/memaker-3.png',
  },
  {
    name : "juancito",
    img : 'https://cdn.dribbble.com/users/504585/screenshots/2006389/terrible_designer_avatar-01.jpg',
  },
  {
      name: "Arturito",
      img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSysaJZpd7zn3yWMvevq0QouWrdBVSgWO3mRLcXIVU6s6fMAYTgQ'
  },
  {
    name : "Pepe",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrEYBij4LVbQTdvabHi-OlBE3mQUe5KHjqgmiCDo3IeFVJuk-"
  },
]

const UserList = props => {
  const userList = props.list.map((user,i)=> <User2 user={user} key={i}/>);
  return (
    <div className="userl-list">
      {userList}
    </div>
  )
}

ReactDOM.render(<UserList list={users}/>,document.getElementById('app'));
