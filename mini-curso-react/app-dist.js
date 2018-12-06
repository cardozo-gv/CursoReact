"use strict";

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

var app = document.getElementById('app');

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

function Saludar(props) {
  return React.createElement(
    "h1",
    null,
    "Hola ",
    props.name
  );
}

var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("img", { src: props.img, alt: props.name }),
    React.createElement(
      "p",
      null,
      props.name
    )
  );
};

var Avatar = function Avatar(props) {
  return React.createElement("img", { src: props.user.img, alt: props.user.name });
};

var UserName = function UserName(props) {
  return React.createElement(
    "p",
    null,
    props.user.name
  );
};

var User2 = function User2(props) {
  return React.createElement(
    "div",
    { className: "user-item" },
    React.createElement(Avatar, { user: props.user }),
    React.createElement(UserName, { user: props.user })
  );
};

var user = {
  name: "Arturito",
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSysaJZpd7zn3yWMvevq0QouWrdBVSgWO3mRLcXIVU6s6fMAYTgQ'
};

var users = [{
  name: "jorgito",
  img: 'https://kzkggaara.files.wordpress.com/2010/08/memaker-3.png'
}, {
  name: "juancito",
  img: 'https://cdn.dribbble.com/users/504585/screenshots/2006389/terrible_designer_avatar-01.jpg'
}, {
  name: "Arturito",
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSysaJZpd7zn3yWMvevq0QouWrdBVSgWO3mRLcXIVU6s6fMAYTgQ'
}, {
  name: "Pepe",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrEYBij4LVbQTdvabHi-OlBE3mQUe5KHjqgmiCDo3IeFVJuk-"
}];

var UserList = function UserList(props) {
  var userList = props.list.map(function (user, i) {
    return React.createElement(User2, { user: user, key: i });
  });
  return React.createElement(
    "div",
    { className: "userl-list" },
    userList
  );
};

ReactDOM.render(React.createElement(UserList, { list: users }), document.getElementById('app'));
