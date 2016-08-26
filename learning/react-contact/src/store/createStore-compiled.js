'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var history = arguments[1];

  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history));

  // Use DevTools chrome extension in development
  if (__DEBUG__) {
    var devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      middleware = (0, _redux.compose)(middleware, devToolsExtension());
    }
  }

  var store = (0, _redux.createStore)((0, _reducers2.default)(), initialState, middleware);

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', function () {
      var reducers = require('./reducers').default;

      store.replaceReducer(reducers);
    });
  }

  return store;
};

//# sourceMappingURL=createStore-compiled.js.map