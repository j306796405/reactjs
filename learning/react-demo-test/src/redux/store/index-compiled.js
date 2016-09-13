/**
 * FileName index
 * Date 2016-09-13
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.history = exports.store = undefined;

var _reactRouterRedux = require('react-router-redux');

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _redux = require('redux');

var _reactRouter = require('react-router');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _REDUCER = require('REDUCER');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ========================================================
// 浏览器 history 配置
// ========================================================
var browserHistory = (0, _reactRouter.useRouterHistory)(_createBrowserHistory2.default)({
    basename: '' // 相当于 rootPath
});

// ======================================================
// 配置中间件
// ======================================================
var middlewares = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(browserHistory)];
if (__DEV__) {
    /** Redux Logger (P.S: 打印日志会造成轻微的卡顿) **/
    var createLogger = require('redux-logger');
    middlewares.push(createLogger());
}

// ======================================================
// 配置 Store 增强器
// ======================================================
var enhancers = [];
if (__DEV__) {
    /** Redux DevTools **/

    /* 1. Chrome 插件 Redux DevTools（默认）
     P.S: 独立窗口可调用 window.devToolsExtension.open() */
    if (!__COMPONENT_DEVTOOLS__) {
        var devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    /* 2. 内嵌在页面中的 Redux DevTools 组件 */
    if (__COMPONENT_DEVTOOLS__) {
        var DevTools = require('COMPONENT/DevTools').default;
        enhancers.push(DevTools.instrument());
    }
}

// ======================================================
// 实例化 Store
// ======================================================
var store = exports.store = (0, _redux.createStore)((0, _REDUCER.createRootReducer)(), window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
_redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, middlewares)].concat(enhancers)));

// ======================================================
// 配置 history 同步
// ======================================================
var history = exports.history = (0, _reactRouterRedux.syncHistoryWithStore)(browserHistory, store, { selectLocationState: function selectLocationState(state) {
        return state.router;
    } });

exports.default = store;

//# sourceMappingURL=index-compiled.js.map