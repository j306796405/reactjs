'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.clearZen = exports.receiveZen = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ACTION_HANDLERS;

exports.fetchZen = fetchZen;

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Constants
// ------------------------------------
var RECEIVE_ZEN = 'RECEIVE_ZEN';
var REQUEST_ZEN = 'REQUEST_ZEN';
var CLEAR_ZEN = 'CLEAR_ZEN';

// ------------------------------------
// Actions
// ------------------------------------

function requestZen() {
  return {
    type: REQUEST_ZEN
  };
}

var avaliableId = 0;
var receiveZen = exports.receiveZen = function receiveZen(value) {
  return {
    type: RECEIVE_ZEN,
    payload: {
      text: value,
      id: avaliableId++
    }
  };
};

var clearZen = exports.clearZen = function clearZen() {
  return {
    type: CLEAR_ZEN
  };
};

function fetchZen() {
  return function (dispatch, getState) {
    if (getState().zen.fetching) return;

    dispatch(requestZen());
    return fetch('https://api.github.com/zen').then(function (data) {
      return data.text();
    }).then(function (text) {
      return dispatch(receiveZen(text));
    });
  };
}

var actions = exports.actions = {
  requestZen: requestZen,
  receiveZen: receiveZen,
  clearZen: clearZen,
  fetchZen: fetchZen
};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, REQUEST_ZEN, function (state) {
  return (0, _extends3.default)({}, state, { fetching: true });
}), (0, _defineProperty3.default)(_ACTION_HANDLERS, RECEIVE_ZEN, function (state, action) {
  return (0, _extends3.default)({}, state, { fetching: false, text: state.text.concat(action.payload) });
}), (0, _defineProperty3.default)(_ACTION_HANDLERS, CLEAR_ZEN, function (state) {
  return (0, _extends3.default)({}, state, { text: [] });
}), _ACTION_HANDLERS);

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  fetching: false,
  text: []
};

//# sourceMappingURL=zen-compiled.js.map