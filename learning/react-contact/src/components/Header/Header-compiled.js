'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Header = require('./Header.scss');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'React Starter Kit ---- ',
      _react2.default.createElement(
        'a',
        { href: 'https://bodyno.com', target: '_blank' },
        'bodyno'
      )
    ),
    _react2.default.createElement(
      _reactRouter.IndexLink,
      { to: '/', activeClassName: _Header2.default.activeRoute },
      'Home'
    ),
    ' · ',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/counter', activeClassName: _Header2.default.activeRoute },
      'Counter'
    ),
    ' · ',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/zen', activeClassName: _Header2.default.activeRoute },
      'Zen'
    ),
    ' · ',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/elapse', activeClassName: _Header2.default.activeRoute },
      'Elapse'
    ),
    ' · ',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/route/88', activeClassName: _Header2.default.activeRoute },
      'Route'
    ),
    ' · ',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/notFound', activeClassName: _Header2.default.activeRoute },
      '404'
    )
  );
};

exports.default = Header;

//# sourceMappingURL=Header-compiled.js.map