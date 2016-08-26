'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.PLUS = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.plus = plus;
exports.default = elapseReducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Constants
// ------------------------------------
var PLUS = exports.PLUS = 'PLUS';

// ------------------------------------
// Actions
// ------------------------------------

function plus() {
  return {
    type: PLUS
  };
}

var actions = exports.actions = {
  plus: plus
};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = (0, _defineProperty3.default)({}, PLUS, function (state) {
  return state + 1;
});

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = 0;
function elapseReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

//# sourceMappingURL=elapse-compiled.js.map