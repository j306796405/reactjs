/**
 * FileName modal
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var modalMod = {
    alert: function alert(text, callback) {
        myApp.modal({
            title: '提示',
            text: text,
            buttons: [{
                text: '确定',
                onClick: function onClick() {
                    callback && callback();
                }
            }]
        });
    },
    confrim: function confrim(text, callback) {
        myApp.modal({
            title: '提示',
            text: text,
            buttons: [{
                text: '取消'
            }, {
                text: '确定',
                onClick: function onClick() {
                    callback && callback();
                }
            }]
        });
    }
};
exports.default = modalMod;

//# sourceMappingURL=modal-compiled.js.map