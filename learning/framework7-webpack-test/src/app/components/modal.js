/**
 * FileName modal
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

const modalMod = {
    alert(text, callback){
        myApp.modal({
            title: '提示',
            text,
            buttons: [{
                text: '确定',
                onClick(){
                    callback && callback();
                }
            }]
        });
    },
    confrim(text, callback){
        myApp.modal({
            title: '提示',
            text,
            buttons: [{
                text: '取消'
            },{
                text: '确定',
                onClick(){
                    callback && callback();
                }
            }]
        });
    }
};
export default modalMod;