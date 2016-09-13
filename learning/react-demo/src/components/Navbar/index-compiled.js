'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _LogoutDropdown = require('./LogoutDropdown');

var _LogoutDropdown2 = _interopRequireDefault(_LogoutDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 导航栏全局显示，控制着用户的登录注销 */

var Navbar = function (_Component) {
    (0, _inherits3.default)(Navbar, _Component);

    function Navbar() {
        (0, _classCallCheck3.default)(this, Navbar);
        return (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).apply(this, arguments));
    }

    (0, _createClass3.default)(Navbar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.info('[Navbar] 初始化：检查用户是否已经登录');
            console.info('[TIPS] 由于有Redux Logger，故之后就不手动打印动作了');
            console.log(this.props);
            this.props.checkLogin();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = // 通过 LayoutView 传入
            this.props;
            var userData = _props.userData;
            var login = _props.login;
            var logout = _props.logout;
            var pathname = _props.location.pathname;


            return _react2.default.createElement(
                'div',
                { className: 'row clearfix' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12 column' },
                    _react2.default.createElement(
                        'nav',
                        { className: 'navbar navbar-default', role: 'navigation' },
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar-header' },
                            _react2.default.createElement(
                                'button',
                                {
                                    type: 'button',
                                    className: 'navbar-toggle',
                                    'data-toggle': 'collapse',
                                    'data-target': '#nav-collapse' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle navigation'
                                ),
                                _react2.default.createElement('span', { className: 'icon-bar' }),
                                _react2.default.createElement('span', { className: 'icon-bar' }),
                                _react2.default.createElement('span', { className: 'icon-bar' })
                            ),
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/', className: 'navbar-brand' },
                                'React Demo'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'collapse navbar-collapse', id: 'nav-collapse' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'nav navbar-nav' },
                                _react2.default.createElement(
                                    'li',
                                    { className: pathname === '/' && 'active' },
                                    _react2.default.createElement(
                                        _reactRouter.IndexLink,
                                        { to: '/' },
                                        '欢迎页'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: pathname.startsWith('/msg') && 'active' },
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/msg' },
                                        '留言板'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: pathname.startsWith('/todo') && 'active' },
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/todo' },
                                        '待办事项(新功能)'
                                    )
                                )
                            ),
                            userData ? _react2.default.createElement(_LogoutDropdown2.default, { userData: userData, logout: logout }) : _react2.default.createElement(_LoginForm2.default, { login: login })
                        )
                    )
                )
            );
        }
    }]);
    return Navbar;
}(_react.Component);

exports.default = Navbar;

//# sourceMappingURL=index-compiled.js.map