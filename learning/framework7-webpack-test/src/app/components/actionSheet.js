/**
 * FileName showActionSheet
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

const actionSheet = function(buttons){
    var normalBtn = [
        {
            text: '请选择',
            label: true
        }
    ]
    var cancelBtn = [
        {
            text: '取消',
            color: 'red'
        }
    ];
    Array.prototype.push.apply(normalBtn, buttons);
    var groups = [normalBtn, cancelBtn];
    console.log(groups);
    myApp.actions(groups);
}

export default actionSheet;