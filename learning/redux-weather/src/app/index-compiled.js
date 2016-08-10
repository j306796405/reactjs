'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Root = require('./containers/Root');

var _Root2 = _interopRequireDefault(_Root);

require('framework7/dist/css/framework7.material.css');

require('framework7/dist/css/framework7.material.colors.css');

require('./../css/weather7.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Root2.default, null), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map