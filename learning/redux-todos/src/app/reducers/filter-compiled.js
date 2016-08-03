/**
 * FileName filter
 * Date 2016-08-03
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('./../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { active: true } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case types.FILTER_ITEMS:
      return Object.assign({}, state, { active: action.active });

    default:
      return state;
  }
};

//# sourceMappingURL=filter-compiled.js.map