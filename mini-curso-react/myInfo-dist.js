'use strict';

function SobreMi() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'Sobre Mi'
    ),
    React.createElement(
      'p',
      null,
      'Mi nombre es Griselda Cardozo, tengo 40 a\xF1os y soy programador de software en este momento me encuentro aprendiendo sobre React'
    )
  );
}

function TopVisitar() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'Lugares que me gustar\xEDan visitar'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Machu pichu'
      ),
      React.createElement(
        'li',
        null,
        'ibiza'
      ),
      React.createElement(
        'li',
        null,
        'Paris'
      )
    )
  );
}

function MyInfo() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Griselda Cardozo'
    ),
    React.createElement(SobreMi, null),
    React.createElement(TopVisitar, null)
  );
}

ReactDOM.render(React.createElement(MyInfo, null), document.getElementById('app'));
