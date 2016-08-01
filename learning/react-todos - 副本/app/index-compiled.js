'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _Root = require('./containers/Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)();

_reactDom2.default.render(_react2.default.createElement(_Root2.default, { store: store }), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map