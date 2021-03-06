/**
 * FileName list
 * Date 2016-08-01
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addItem = addItem;
exports.updateItemStatus = updateItemStatus;
exports.deleteItem = deleteItem;
exports.updateItemsStatus = updateItemsStatus;
exports.deleteItems = deleteItems;
exports.filterItems = filterItems;

var _ActionTypes = require('./../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addItem(text) {
  return {
    type: types.ADD_ITEM,
    text: text
  };
}

function updateItemStatus(status) {
  return _extends({
    type: types.UPDATE_ITEM_STATUS
  }, status);
}

function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    id: id
  };
}

function updateItemsStatus(status) {
  return _extends({
    type: types.UPDATE_ITEMS_STATUS
  }, status);
}

//query?
function deleteItems(query) {
  return {
    type: types.DELETE_ITEMS,
    query: query
  };
}

function filterItems(active) {
  return _extends({
    type: types.FILTER_ITEMS
  }, active);
}

//# sourceMappingURL=list-compiled.js.map