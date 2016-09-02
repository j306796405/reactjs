/**
 * FileName detail
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tool = require('../utils/tool');

var _tool2 = _interopRequireDefault(_tool);

var _detailTpl = require('./detail.tpl.html');

var _detailTpl2 = _interopRequireDefault(_detailTpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Detail = function () {
    function Detail() {
        _classCallCheck(this, Detail);
    }

    _createClass(Detail, [{
        key: 'init',
        value: function init(page) {
            this.getTopicDetail();
        }
    }, {
        key: 'getTopicDetail',
        value: function getTopicDetail(id) {
            var detailTPl = _tool2.default.renderTpl(_detailTpl2.default, res.data);
            $('.detail-page').append($(detailTPl));
        }
    }]);

    return Detail;
}();

exports.default = new Detail();

//# sourceMappingURL=detail-compiled.js.map