'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectReducer = exports.reducers = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = function reducers(asyncReducers) {
  return (0, _redux.combineReducers)((0, _extends3.default)({
    // Add sync reducers here
    router: _reactRouterRedux.routerReducer
  }, asyncReducers));
};

var injectReducer = exports.injectReducer = function injectReducer(store, _ref) {
  var key = _ref.key;
  var reducer = _ref.reducer;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(reducers(store.asyncReducers));
};

exports.default = reducers;

//# sourceMappingURL=reducers-compiled.js.map