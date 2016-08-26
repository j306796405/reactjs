'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeView = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Duck = require('../assets/Duck.jpg');

var _Duck2 = _interopRequireDefault(_Duck);

var _HomeView = require('./HomeView.scss');

var _HomeView2 = _interopRequireDefault(_HomeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeView = exports.HomeView = function HomeView() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Welcome!'
    ),
    _react2.default.createElement('img', {
      alt: 'This is a duck, because Redux!',
      className: _HomeView2.default.duck,
      src: _Duck2.default })
  );
};

exports.default = HomeView;

//# sourceMappingURL=HomeView-compiled.js.map