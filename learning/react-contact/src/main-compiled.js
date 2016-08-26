'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _createStore = require('./store/createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _AppContainer = require('./containers/AppContainer');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ========================================================
// Browser History Setup
// ========================================================
var browserHistory = (0, _reactRouter.useRouterHistory)(_createBrowserHistory2.default)({
  basename: __BASENAME__
});

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
var initialState = window.___INITIAL_STATE__;
var store = (0, _createStore2.default)(initialState, browserHistory);
var history = (0, _reactRouterRedux.syncHistoryWithStore)(browserHistory, store, {
  selectLocationState: function selectLocationState(state) {
    return state.router;
  }
});

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }
}

// ========================================================
// Render Setup
// ========================================================
var MOUNT_NODE = document.getElementById('root');

var render = function render() {
  var routes = require('./routes/index').default(store);

  _reactDom2.default.render(_react2.default.createElement(_AppContainer2.default, {
    store: store,
    history: history,
    routes: routes
  }), MOUNT_NODE);
};

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    (function () {
      var renderApp = render;
      var renderError = function renderError(error) {
        var RedBox = require('redbox-react').default;

        _reactDom2.default.render(_react2.default.createElement(RedBox, { error: error }), MOUNT_NODE);
      };

      // Wrap render in try/catch
      render = function render() {
        try {
          renderApp();
        } catch (error) {
          renderError(error);
        }
      };

      module.hot.accept(['./routes/index'], function () {
        setTimeout(function () {
          _reactDom2.default.unmountComponentAtNode(MOUNT_NODE);
          render();
        });
      });
    })();
  }
}

// ========================================================
// Go!
// ========================================================
render();

//# sourceMappingURL=main-compiled.js.map