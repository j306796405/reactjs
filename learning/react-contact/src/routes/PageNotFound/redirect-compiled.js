'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  path: '*',
  indexRoute: {
    onEnter: function onEnter(nextState, replace) {
      replace('/404');
    }
  }
};

//# sourceMappingURL=redirect-compiled.js.map