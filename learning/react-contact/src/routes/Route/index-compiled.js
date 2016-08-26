'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'route/:id',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        var Route = require('./components/Route').default;
        cb(null, Route);
      });
    }
  };
};

//# sourceMappingURL=index-compiled.js.map