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

var _Zen = require('./Zen.scss');

var _Zen2 = _interopRequireDefault(_Zen);

var _ClipLoader = require('halogen/ClipLoader');

var _ClipLoader2 = _interopRequireDefault(_ClipLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var child = function child(item) {
  return _react2.default.createElement(
    'h1',
    { key: item.id },
    item.text
  );
};

var Zen = function (_Component) {
  (0, _inherits3.default)(Zen, _Component);

  function Zen() {
    (0, _classCallCheck3.default)(this, Zen);
    return (0, _possibleConstructorReturn3.default)(this, (Zen.__proto__ || (0, _getPrototypeOf2.default)(Zen)).apply(this, arguments));
  }

  (0, _createClass3.default)(Zen, [{
    key: 'renderLoading',
    value: function renderLoading() {
      return this.props.zen.fetching ? _react2.default.createElement(
        'div',
        { className: _Zen2.default.loader },
        _react2.default.createElement(_ClipLoader2.default, { color: '#26A65B' })
      ) : '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var fetchZen = _props.fetchZen;
      var clearZen = _props.clearZen;
      var zen = _props.zen;
      var fetching = zen.fetching;
      var text = zen.text;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { className: 'btn btn-default', onClick: fetchZen },
            fetching ? 'Fetching...' : 'Fetch'
          ),
          '  ',
          _react2.default.createElement(
            'button',
            { className: 'btn btn-default', onClick: clearZen },
            'Clear'
          )
        ),
        this.renderLoading(),
        _react2.default.createElement(
          'div',
          null,
          text.map(child)
        )
      );
    }
  }]);
  return Zen;
}(_react.Component);

exports.default = Zen;


Zen.propTypes = {
  zen: _react2.default.PropTypes.object.isRequired
};

//# sourceMappingURL=Zen-compiled.js.map