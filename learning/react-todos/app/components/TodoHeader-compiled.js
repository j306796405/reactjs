'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoHeader = function (_React$Component) {
  _inherits(TodoHeader, _React$Component);

  function TodoHeader() {
    _classCallCheck(this, TodoHeader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoHeader).apply(this, arguments));
  }

  _createClass(TodoHeader, [{
    key: 'handlerKeyUp',
    value: function handlerKeyUp(event) {
      if (event.keyCode === 13) {
        var value = event.target.value;

        if (!value) {
          return false;
        }

        var newTodoItem = {
          text: value,
          isDone: false
        };
        event.target.value = '';
        this.props.addTodo(newTodoItem);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel-header' },
        _react2.default.createElement('input', { type: 'text', onKeyUp: this.handlerKeyUp.bind(this), placeholder: 'what\'s your task？' })
      );
    }
  }]);

  return TodoHeader;
}(_react2.default.Component);

exports.default = TodoHeader;

//# sourceMappingURL=TodoHeader-compiled.js.map