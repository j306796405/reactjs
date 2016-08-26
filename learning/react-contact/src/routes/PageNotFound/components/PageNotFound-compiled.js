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

var _ = require('../assets/404.jpg');

var _2 = _interopRequireDefault(_);

var _PageNotFound = require('./PageNotFound.scss');

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNotFound = function (_Component) {
  (0, _inherits3.default)(PageNotFound, _Component);

  function PageNotFound() {
    (0, _classCallCheck3.default)(this, PageNotFound);
    return (0, _possibleConstructorReturn3.default)(this, (PageNotFound.__proto__ || (0, _getPrototypeOf2.default)(PageNotFound)).apply(this, arguments));
  }

  (0, _createClass3.default)(PageNotFound, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'div',
        { className: _PageNotFound2.default.container },
        _react2.default.createElement(
          'h1',
          null,
          'Page not found!!!'
        ),
        _react2.default.createElement(
          'h3',
          null,
          _react2.default.createElement(
            'a',
            { className: _PageNotFound2.default.link, onClick: props.router.goBack },
            'Back'
          )
        ),
        _react2.default.createElement('img', { src: _2.default })
      );
    }
  }]);
  return PageNotFound;
}(_react.Component);

PageNotFound.propTypes = {
  router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRouter.withRouter)(PageNotFound);

//# sourceMappingURL=PageNotFound-compiled.js.map