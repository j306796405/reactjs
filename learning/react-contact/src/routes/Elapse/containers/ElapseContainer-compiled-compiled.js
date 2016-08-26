'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _elapse = require('./../modules/elapse');

var _Elapse = require('./../components/Elapse');

var _Elapse2 = _interopRequireDefault(_Elapse);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var mapDispatchtoProps = {
  plus: _elapse.plus
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    elapse: state.elapse
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchtoProps)(_Elapse2.default);

//# sourceMappingURL=ElapseContainer-compiled.js.map

//# sourceMappingURL=ElapseContainer-compiled-compiled.js.map