'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// createDevTools takes a monitor and produces a DevTools component
// 参考 https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
var DevTools = (0, _reduxDevtools.createDevTools)(
// Monitors are individually adjustable with props.
// Consult their repositories to learn about those props.
// Here, we put LogMonitor inside a DockMonitor.
// Note: DockMonitor is visible by default.
_react2.default.createElement(
  _reduxDevtoolsDockMonitor2.default,
  {
    toggleVisibilityKey: 'ctrl-h',
    changePositionKey: 'ctrl-q'
    /* 设置默认隐藏，不然每次刷新都自动显示，相当烦人 */
    , defaultIsVisible: false },
  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { theme: 'tomorrow' })
));

exports.default = DevTools;

//# sourceMappingURL=DevTools-compiled.js.map