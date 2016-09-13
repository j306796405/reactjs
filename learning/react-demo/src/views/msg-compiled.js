'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 留言板 布局基页 */
var MsgView = function MsgView(_ref) {
  var children = _ref.children;
  var location = _ref.location;
  return _react2.default.createElement(
    'div',
    null,
    !location.pathname.startsWith('/msg/add') && _react2.default.createElement(
      _reactRouter.Link,
      {
        className: 'btn btn-default btn-lg btn-block',
        to: '/msg/add' },
      '添加消息',
      _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
    ),
    _react2.default.createElement('br', null),
    children
  );
};

exports.default = MsgView;

//# sourceMappingURL=msg-compiled.js.map