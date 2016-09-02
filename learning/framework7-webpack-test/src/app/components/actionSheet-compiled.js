/**
 * FileName showActionSheet
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var actionSheet = function actionSheet(buttons) {
    var normalBtn = [{
        text: '请选择',
        label: true
    }];
    var cancelBtn = [{
        text: '取消',
        color: 'red'
    }];
    Array.prototype.push.apply(normalBtn, buttons);
    var groups = [normalBtn, cancelBtn];
    myApp.actions(groups);
};

exports.default = actionSheet;

//# sourceMappingURL=actionSheet-compiled.js.map