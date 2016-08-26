'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = require('../../store/reducers');

exports.default = function (store) {
  return {
    path: 'elapse',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        var Elapse = require('./containers/ElapseContainer').default;
        var reducer = require('./modules/elapse').default;
        (0, _reducers.injectReducer)(store, { key: 'elapse', reducer: reducer });
        cb(null, Elapse);
      });
    }
  };
};

//# sourceMappingURL=index-compiled.js.map