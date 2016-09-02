/**
 * FileName router
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detail = require('./detail/detail');

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);
    }

    _createClass(Router, [{
        key: 'init',
        value: function init() {
            var that = this;
            $$(document).on('pageBeforeInit', function (e) {
                that.pageBeforeInit();
            });
        }
    }, {
        key: 'pageBeforeInit',
        value: function pageBeforeInit(page) {
            switch (page.name) {
                case 'detail':
                    _detail2.default.init(page);
                    break;

                default:
                    break;
            }
        }
    }]);

    return Router;
}();

//# sourceMappingURL=router-compiled.js.map