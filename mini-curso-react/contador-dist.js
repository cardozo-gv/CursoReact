"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* State */

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

    _this.state = {
      count: 0
    };
    _this.upCounter = _this.upCounter.bind(_this);
    _this.downCounter = _this.downCounter.bind(_this);
    _this.resetCounter = _this.resetCounter.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: "upCounter",
    value: function upCounter(e) {
      e.preventDefault();
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "downCounter",
    value: function downCounter(e) {
      e.preventDefault();
      if (this.state.count > 0) {
        this.setState(function (prevState) {
          return {
            count: prevState.count - 1
          };
        });
      }
    }
  }, {
    key: "resetCounter",
    value: function resetCounter(e) {
      e.preventDefault();
      this.setState({
        count: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "counter" },
        React.createElement(
          "div",
          { className: "count" },
          this.state.count
        ),
        React.createElement(
          "div",
          { className: "changeCount" },
          React.createElement(
            "a",
            { href: "#", className: "upCounter", onClick: this.upCounter },
            "UP "
          ),
          React.createElement(
            "a",
            { href: "#", className: "downCounter", onClick: this.downCounter },
            "DOWN "
          ),
          React.createElement(
            "a",
            { href: "#", className: "resetCounter", onClick: this.resetCounter },
            "RESET "
          )
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
