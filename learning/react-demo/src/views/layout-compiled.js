'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('COMPONENT/Navbar/');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 本文件是全局布局基页
 */


var DevTools = void 0;
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
    // 组件形式的 Redux DevTools
    DevTools = require('COMPONENT/DevTools').default;
}

var LayoutView = function LayoutView(_ref) {
    var children = _ref.children;
    var location = _ref.location;
    var history = _ref.history;
    var params = _ref.params;
    var route = _ref.route;
    var routeParams = _ref.routeParams;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { location: location }),
        _react2.default.createElement(
            'div',
            { className: 'container' },
            children
        ),
        DevTools && _react2.default.createElement(DevTools, null)
    );
};

exports.default = LayoutView;

//# sourceMappingURL=layout-compiled.js.map