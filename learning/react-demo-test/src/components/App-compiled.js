'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _STORE = require('STORE');

var _ROUTE = require('ROUTE');

var _ROUTE2 = _interopRequireDefault(_ROUTE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _STORE.store },
    _react2.default.createElement(_reactRouter.Router, { history: _STORE.history, children: _ROUTE2.default })
  );
};

exports.default = App;

//# sourceMappingURL=App-compiled.js.map