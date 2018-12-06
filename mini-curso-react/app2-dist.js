"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
STATE
=====

Las propiedades son inmutables no pueden cambiar.
Los estados son mutables y son encapsulados por el componente al que pertence
Es decir los estados se crean, se actualizan, se modifican dentro del componente al que pertenece.

Para que un componente tenga estado es necesario crearlo mediante clases.
*/

/*class Hello extends React.Component { // Clase sin estado
  constructor(props){
    super(props)
  }

  render(){
    return(
      <h1>{this.props.saludo}</h1>
    )
  }
}

ReactDOM.render(<Hello saludo="Hola Mundo"/>, document.getElementById('app'))
*/

var Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello(props) {
    _classCallCheck(this, Hello);

    var _this = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

    _this.state = {
      nombre: "Griselda"
    };
    _this.despedirse = _this.despedirse.bind(_this);
    return _this;
  }

  _createClass(Hello, [{
    key: "despedirse",
    value: function despedirse() {
      this.setState({
        nombre: "Verónica"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        { onClick: this.despedirse },
        "Hola ",
        this.state.nombre
      );
    }
  }]);

  return Hello;
}(React.Component);

ReactDOM.render(React.createElement(Hello, null), document.getElementById('app'));
