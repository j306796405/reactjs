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

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = function (_Component) {
  (0, _inherits3.default)(Route, _Component);

  function Route(props) {
    (0, _classCallCheck3.default)(this, Route);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Route.__proto__ || (0, _getPrototypeOf2.default)(Route)).call(this, props));

    _this.redirect = _this.redirect.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Route, [{
    key: 'redirect',
    value: function redirect() {
      this.props.router.push('/form');
    }
  }, {
    key: 'render',
    value: function render() {
      var location = this.props.location;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Path: ',
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/form' },
            location.pathname
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.redirect },
            'Go'
          )
        )
      );
    }
  }]);
  return Route;
}(_react.Component);

Route.propTypes = {
  location: _react2.default.PropTypes.object.isRequired,
  router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRouter.withRouter)(Route);

//# sourceMappingURL=Route-compiled.js.map