/**
 * FileName xhr
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

import Constant from './constants';

class XHR {
    constructor() {
        this.age = 28;
    }

    getTopics(params) {
        params.path = '/api/v1/topics/?page=' + params.page + '&tab=' + params.tab + '&limit=10';
        this.request(params);
    }

    getTopicById(params){
        params.path = '/api/v1/topic/' + params.id;
        this.request(params);
    }

    request(params) {
        var
            defaultParam = {
                url: Constant.SERVER_URL + params.path,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'json',
                complete: function (request, status) {
                }
            };

        $$.each(defaultParam, function (key, val) {
            if (!params[key]) {
                params[key] = val;
            }
        })

        //此处应该是调用post接口
        if (params.type.toUpperCase() === 'POST' && params.contentType && params.contentType.indexOf('json') != -1) {
            params.data = JSON.stringify(params.data);
        }
        console.log('调用接口:\n%s,\n参数列表:', params.url, params.data);

        $$.ajax(params);
    }
}

export default new XHR();