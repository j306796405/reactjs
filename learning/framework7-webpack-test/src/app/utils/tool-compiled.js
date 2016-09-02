/**
 * FileName tool
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tools = function () {
    function Tools() {
        _classCallCheck(this, Tools);
    }

    _createClass(Tools, [{
        key: 'renderTpl',
        value: function renderTpl(tpl, data) {
            return Template7.compile(tpl)(data);
        }
    }]);

    return Tools;
}();

//# sourceMappingURL=tool-compiled.js.map