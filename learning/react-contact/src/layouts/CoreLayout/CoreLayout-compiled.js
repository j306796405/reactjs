'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoreLayout = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

require('framework7/dist/css/framework7.ios.css');

require('./../../styles/common.scss');

require('../../styles/core.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoreLayout = exports.CoreLayout = function CoreLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'c-wrap' },
    _react2.default.createElement(
      'div',
      { className: 'navbar' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-inner' },
        _react2.default.createElement('div', { className: 'left' }),
        _react2.default.createElement(
          'div',
          { className: 'center' },
          'Issues'
        ),
        _react2.default.createElement(
          'div',
          { className: 'right' },
          'New'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'views' },
      _react2.default.createElement(
        'div',
        { className: 'view view-main' },
        _react2.default.createElement(
          'div',
          { className: 'list-block issue-list' },
          _react2.default.createElement(
            'div',
            { className: 'list-group' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                { className: 'h2' },
                'ToDo'
              ),
              _react2.default.createElement(
                'li',
                { className: 'item-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'item-inner' },
                  _react2.default.createElement(
                    'div',
                    { className: 'item-title-row' },
                    _react2.default.createElement(
                      'div',
                      { className: 'item-title title' },
                      'Test in Android browser'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'description' },
                    'Test the app on chrome in Android'
                  )
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement('div', { className: 'view another-view' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'popup' },
      _react2.default.createElement(
        'div',
        { className: 'view popup-view' },
        ' ...'
      )
    )
  );
};

CoreLayout.propTypes = {
  children: _react2.default.PropTypes.element.isRequired
};

exports.default = CoreLayout;

//# sourceMappingURL=CoreLayout-compiled.js.map