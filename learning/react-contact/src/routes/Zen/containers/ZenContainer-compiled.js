'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _zen = require('./../modules/zen');

var _Zen = require('../components/Zen');

var _Zen2 = _interopRequireDefault(_Zen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchtoProps = {
  fetchZen: _zen.fetchZen,
  clearZen: _zen.clearZen
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    zen: state.zen
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchtoProps)(_Zen2.default);

//# sourceMappingURL=ZenContainer-compiled.js.map