/**
 * FileName index
 * Date 2016-09-13
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.createRootReducer = createRootReducer;
exports.injectReducer = injectReducer;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _STORE = require('STORE');

var _STORE2 = _interopRequireDefault(_STORE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ================================
// 同步的 Reducers（即应用初始化所必需的） ?????
// ================================
var syncReducers = {
    router: _reactRouterRedux.routerReducer
};

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
var asyncReducers = {};

/**
 * @return {Function} rootReducer
 */
function createRootReducer() {
    return (0, _redux.combineReducers)((0, _extends3.default)({}, syncReducers, asyncReducers));
}

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
function injectReducer(key, reducer) {
    asyncReducers[key] = reducer;
    _STORE2.default.replaceReducer(createRootReducer()); // 替换当前的 rootReducer
}

//# sourceMappingURL=index-compiled.js.map