/**
 * FileName routes
 * Date 2016-08-11
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _history = require('history');

var _App = require('./../containers/App');

var _App2 = _interopRequireDefault(_App);

var _Index = require('./../component/Index');

var _Index2 = _interopRequireDefault(_Index);

var _Search = require('./../component/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Path = function (_React$Component) {
  _inherits(Path, _React$Component);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Path).apply(this, arguments));
  }

  _createClass(Path, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouter.Router,
        { history: (0, _history.createHistory)() },
        _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Index2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/search', component: _Search2.default })
      );
    }
  }]);

  return Path;
}(_react2.default.Component);

exports.default = Path;

//# sourceMappingURL=Index-compiled.js.map