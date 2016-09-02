/**
 * FileName xhr
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XHR = function () {
    function XHR() {
        _classCallCheck(this, XHR);

        this.age = 28;
    }

    _createClass(XHR, [{
        key: 'getTopics',
        value: function getTopics(params) {
            params.path = '/api/v1/topics/?page=' + params.page + '&tab=' + params.tab + '&limit=10';
            this.request(params);
        }
    }, {
        key: 'request',
        value: function request(params) {
            var defaultParam = {
                url: _constants2.default.SERVER_URL + params.path,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'json',
                complete: function complete(request, status) {}
            };

            $$.each(defaultParam, function (key, val) {
                if (!params[key]) {
                    params[key] = val;
                }
            });

            //此处应该是调用post接口
            if (params.type.toUpperCase() === 'POST' && params.contentType && params.contentType.indexOf('json') != -1) {
                params.data = JSON.stringify(params.data);
            }
            console.log('调用接口:\n%s,\n参数列表:', params.url, params.data);

            $$.ajax(params);
        }
    }]);

    return XHR;
}();

//# sourceMappingURL=xhr-compiled.js.map