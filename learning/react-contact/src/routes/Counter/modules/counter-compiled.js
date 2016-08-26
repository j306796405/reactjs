'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.doubleAsync = exports.COUNTER_INCREMENT = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.increment = increment;
exports.default = counterReducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Constants
// ------------------------------------
var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------
function increment() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  return {
    type: COUNTER_INCREMENT,
    payload: value
  };
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

var doubleAsync = exports.doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new _promise2.default(function (resolve) {
      setTimeout(function () {
        dispatch(increment(getState().counter));
        resolve();
      }, 200);
    });
  };
};

var actions = exports.actions = {
  increment: increment,
  doubleAsync: doubleAsync
};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = (0, _defineProperty3.default)({}, COUNTER_INCREMENT, function (state, action) {
  return state + action.payload;
});

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = 0;
function counterReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

//# sourceMappingURL=counter-compiled.js.map