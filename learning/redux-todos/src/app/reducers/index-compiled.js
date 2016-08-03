/**
 * FileName index
 * Date 2016-08-01
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ list: _list2.default, filter: _filter2.default });

//# sourceMappingURL=index-compiled.js.map