'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactRouter = require('react-router');

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _NoticeBar = require('./NoticeBar');

var _NoticeBar2 = _interopRequireDefault(_NoticeBar);

var _DisplayControl = require('./DisplayControl');

var _DisplayControl2 = _interopRequireDefault(_DisplayControl);

var _OptBtnGroup = require('COMPONENT/Msg/OptBtnGroup');

var _OptBtnGroup2 = _interopRequireDefault(_OptBtnGroup);

var _dateTimeFormatter = require('UTIL/dateTimeFormatter');

var _dateTimeFormatter2 = _interopRequireDefault(_dateTimeFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MsgList = function (_Component) {
    (0, _inherits3.default)(MsgList, _Component);

    function MsgList() {
        (0, _classCallCheck3.default)(this, MsgList);
        return (0, _possibleConstructorReturn3.default)(this, (MsgList.__proto__ || (0, _getPrototypeOf2.default)(MsgList)).apply(this, arguments));
    }

    (0, _createClass3.default)(MsgList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var author = this.props.location.query.author;

            if (author) this.props.specifyAuthor(author);
            this.updateMsgList();
        }

        /**
         * 类似于 Vue 中的 route: { data: Function } 属性，监听路由变化加载数据
         * 【拓展阅读】无限循环坑 http://stackoverflow.com/questions/36189775
         */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // query string 变化
            if (nextProps.location.search !== this.props.location.search) {
                return this.props.specifyAuthor(nextProps.location.query.author);
            }

            var nextDisplayControl = nextProps.msg.displayControl;
            if ((0, _stringify2.default)(nextDisplayControl) === (0, _stringify2.default)(this.props.msg.displayControl)) return;

            this.updateMsgList(nextDisplayControl);
        }
    }, {
        key: 'updateMsgList',
        value: function updateMsgList() {
            var displayControl = arguments.length <= 0 || arguments[0] === undefined ? this.props.msg.displayControl : arguments[0];
            var pageIdx = displayControl.pageIdx;
            var quantity = displayControl.quantity;
            var author = displayControl.authorSpecified;

            this.props.fetchMsg({ pageIdx: pageIdx, quantity: quantity, author: author });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props);
            var _props = this.props;
            var _props$msg = _props.msg;
            var msgs = _props$msg.msgs;
            var displayControl = _props$msg.displayControl;
            var userData = _props.userData;
            var delMsg = _props.delMsg;
            var goPrevPage = _props.goPrevPage;
            var goNextPage = _props.goNextPage;
            var changeQuantity = _props.changeQuantity;
            var resetDisplayControl = _props.resetDisplayControl;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Pagination2.default, (0, _extends3.default)({
                    msgsLen: msgs.length
                }, displayControl, {
                    goPrevPage: goPrevPage,
                    goNextPage: goNextPage })),
                !msgs.length && _react2.default.createElement(_NoticeBar2.default, null),
                _react2.default.createElement(_DisplayControl2.default, (0, _extends3.default)({
                    msgsLen: msgs.length
                }, displayControl, {
                    changeQuantity: changeQuantity,
                    resetDisplayControl: resetDisplayControl })),
                _react2.default.createElement(
                    'ul',
                    { className: 'list-group' },
                    msgs.map(function (msg) {
                        return _react2.default.createElement(
                            'li',
                            { className: 'list-group-item', key: msg.id },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/msg/detail/' + msg.id },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    msg.title
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'badge' },
                                (0, _dateTimeFormatter2.default)(msg.time, 3)
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'text-muted' },
                                'by '
                            ),
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/msg?author=' + msg.author },
                                _react2.default.createElement(
                                    'i',
                                    null,
                                    msg.author
                                )
                            ),
                            _react2.default.createElement(
                                _OptBtnGroup2.default,
                                {
                                    msgId: msg.id,
                                    isAuthor: userData && userData.username === msg.author,
                                    delMsg: delMsg },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    {
                                        className: 'btn btn-info',
                                        to: '/msg/detail/' + msg.id },
                                    '查看详情'
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);
    return MsgList;
}(_react.Component);

exports.default = MsgList;

//# sourceMappingURL=index-compiled.js.map