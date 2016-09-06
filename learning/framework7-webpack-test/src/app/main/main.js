/**
 * FileName main
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

import './main.less';

import Constant from './../utils/constants';
import XHR from './../utils/xhr';
import Tools from './../utils/tool';
import mainTpl from './main.tpl.html';


class Main {

    init() {
        var that = this;
        this.getTopics(1, function(res){
            res.data = that.transformData(res.data);
            var topicsTpl = Tools.renderTpl(mainTpl, res);
            $$('.topics-list ul').html('').append(topicsTpl);
        })
        this.setAvatar(Constant.AVATAR);
        this.pullToRefresh();
        this.loadMore();
    }

    setAvatar(pic){
        var _avatarElm = $$('.panel-avatar img');
        _avatarElm.attr('src', pic);
    }

    getTopics(page, callback) {
        var
            params = {
                page: page,
                tab: 'all',
                success: success,
                error: error
            },
            that = this;

        XHR.getTopics(params);

        function success(res){
            console.log(res);
            callback && callback(res);
        };
        function error(err){
            console.log(err); 
        } 
    } 

    transformData(data){
        for (var i = 0, l = data.length; i < l; i++) {
            if (data[i].top) {
                data[i].type = '置顶';
                continue;
            } 
            switch (data[i].tab) {
                case 'share':
                    data[i].type = '分享'; 
                    break;
                case 'ask':
                    data[i].type = '问答';
                    break;
                case 'job':
                    data[i].type = '招聘';
                    break;
                case 'good':
                    data[i].type = '精华';
                    break;
                default:
                    data[i].type = '普通';
                    break;
            } 
        };    
        return data;
    }

    pullToRefresh(){
        var ptrContent = $$('.pull-to-refresh-content'),
            that = this;
        ptrContent.on('refresh', function (e) {
            that.getTopics(1, function(res){
                res.data = that.transformData(res.data);
                var topicsTpl = Tools.renderTpl(mainTpl, res);
                $$('.topics-list ul').html('').append(topicsTpl);
                myApp.pullToRefreshDone();
            }); 
        });  
    }

    loadMore(){
        var loading = false,
            that = this,
            page = 2;
        $$('.infinite-scroll').on('infinite', function () {
            if (loading) return;
            loading = true;
            that.getTopics(page, function(res){
                if (res.length !== 0) {
                    ++page;
                    res.data = that.transformData(res.data);
                    var topicsTpl = Tools.renderTpl(mainTpl, res);
                    $$('.media-list ul').append(topicsTpl);
                    loading = false;
                } else {
                    myApp.detachInfiniteScroll($$('.infinite-scroll'));
                    $('.infinite-scroll-preloader').remove();
                }
            });
        });
    }
}


export default new Main();
