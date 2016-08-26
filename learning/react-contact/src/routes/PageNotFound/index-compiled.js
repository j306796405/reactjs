'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    path: '404',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        var PageNotFound = require('./components/PageNotFound').default;
        cb(null, PageNotFound);
      });
    }
  };
};

//# sourceMappingURL=index-compiled.js.map