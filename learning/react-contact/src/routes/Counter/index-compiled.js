'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = require('../../store/reducers');

exports.default = function (store) {
  return {
    path: 'counter',
    /*  Async getComponent is only invoked when route matches   */
    getComponent: function getComponent(nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
          and embed an async module loader (jsonp) when bundling   */
      require.ensure([], function (require) {
        /*  Webpack - use require callback to define
            dependencies for bundling   */
        var Counter = require('./containers/CounterContainer').default;
        var reducer = require('./modules/counter').default;

        /*  Add the reducer to the store on key 'counter'  */
        (0, _reducers.injectReducer)(store, { key: 'counter', reducer: reducer });

        /*  Return getComponent   */
        cb(null, Counter);

        /* Webpack named bundle   */
      }, 'counter');
    }
  };
};

//# sourceMappingURL=index-compiled.js.map