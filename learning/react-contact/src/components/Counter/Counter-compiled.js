'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Counter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Counter = require('./Counter.scss');

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = exports.Counter = function Counter(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      { className: _Counter2.default.counterContainer },
      'Counter:',
      ' ',
      _react2.default.createElement(
        'span',
        { className: _Counter2.default['counter--green'] },
        props.counter
      )
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn btn-default', onClick: props.increment },
      'Increment'
    ),
    ' ',
    _react2.default.createElement(
      'button',
      { className: 'btn btn-default', onClick: props.doubleAsync },
      'Double (Async)'
    )
  );
};

Counter.propTypes = {
  counter: _react2.default.PropTypes.number.isRequired,
  doubleAsync: _react2.default.PropTypes.func.isRequired,
  increment: _react2.default.PropTypes.func.isRequired
};

exports.default = Counter;

//# sourceMappingURL=Counter-compiled.js.map