'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Elapse = function (_Component) {
  (0, _inherits3.default)(Elapse, _Component);

  function Elapse() {
    (0, _classCallCheck3.default)(this, Elapse);
    return (0, _possibleConstructorReturn3.default)(this, (Elapse.__proto__ || (0, _getPrototypeOf2.default)(Elapse)).apply(this, arguments));
  }

  (0, _createClass3.default)(Elapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.interval = setInterval(this.props.plus, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var elapse = this.props.elapse;

      return _react2.default.createElement(
        'h1',
        null,
        'Seconds Elapsed: ',
        elapse
      );
    }
  }]);
  return Elapse;
}(_react.Component);

exports.default = Elapse;


Elapse.propTypes = {
  elapse: _react2.default.PropTypes.number.isRequired,
  plus: _react2.default.PropTypes.func.isRequired
};

//# sourceMappingURL=Elapse-compiled.js.map