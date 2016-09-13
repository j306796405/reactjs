'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 下面这货用于检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 *
 * 有关性能提升方面的问题，之后我会总结出来
 * （诸如 PureComponent / shouldComponentUpdate / Immutable.js 等）
 */
/* 入口启动文件 */
if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
  var _require = require('why-did-you-update');

  var whyDidYouUpdate = _require.whyDidYouUpdate;

  whyDidYouUpdate(_react2.default);
}
if (__DEV__) {
  console.info('[当前环境] 开发环境');
}
if (__PROD__) {
  console.info('[当前环境] 生产环境');
}

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )

//# sourceMappingURL=app-compiled.js.map