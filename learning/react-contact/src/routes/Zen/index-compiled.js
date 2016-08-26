'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = require('../../store/reducers');

exports.default = function (store) {
  return {
    path: 'zen',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        var Zen = require('./containers/ZenContainer').default;
        var reducer = require('./modules/zen').default;
        (0, _reducers.injectReducer)(store, { key: 'zen', reducer: reducer });
        cb(null, Zen);
      });
    }
  };
};

//# sourceMappingURL=index-compiled.js.map