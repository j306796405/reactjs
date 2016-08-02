/**
 * FileName list
 * Date 2016-08-01
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('./../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var addItem = function addItem(text) {
  var time = Date.now();

  return {
    id: Math.random().toString(36).split('.').join(''),
    addTime: time,
    updateTime: time,
    text: text,
    status: false
  };
};

var deleteItem = function deleteItem(state, id) {
  return state.filter(function (todo) {
    return todo.id !== id;
  });
};

var updateItemStatus = function updateItemStatus(state, data) {
  return state.map(function (todo) {
    if (todo.id === data.id) {
      todo.status = data.status;
    }
    return todo;
  });
};

var updateItemsStatus = function updateItemsStatus(state, status) {
  return state.map(function (todo) {
    todo.status = status;
    return todo;
  });
};

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case types.ADD_ITEM:
      return [].concat(_toConsumableArray(state), [addItem(action.text)]);

    case types.DELETE_ITEM:
      return deleteItem(state, action.id);

    case types.UPDATE_ITEM_STATUS:
      return updateItemStatus(state, action.data);

    case types.UPDATE_ITEMS_STATUS:
      return updateItemsStatus(state, action.status);

    default:
      return state;
  }
};

//# sourceMappingURL=list-compiled.js.map