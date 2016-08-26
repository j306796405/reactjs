'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoutes = undefined;

var _CoreLayout = require('../layouts/CoreLayout/CoreLayout');

var _CoreLayout2 = _interopRequireDefault(_CoreLayout);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Counter = require('./Counter');

var _Counter2 = _interopRequireDefault(_Counter);

var _Zen = require('./Zen');

var _Zen2 = _interopRequireDefault(_Zen);

var _Elapse = require('./Elapse');

var _Elapse2 = _interopRequireDefault(_Elapse);

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _PageNotFound = require('./PageNotFound');

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _redirect = require('./PageNotFound/redirect');

var _redirect2 = _interopRequireDefault(_redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

// We only need to import the modules necessary for initial render
var createRoutes = exports.createRoutes = function createRoutes(store) {
  return {
    path: '/',
    component: _CoreLayout2.default,
    indexRoute: _Home2.default,
    childRoutes: [(0, _Counter2.default)(store), (0, _Zen2.default)(store), (0, _Elapse2.default)(store), (0, _Route2.default)(store), (0, _PageNotFound2.default)(), _redirect2.default]
  };
};

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

exports.default = createRoutes;

//# sourceMappingURL=index-compiled.js.map