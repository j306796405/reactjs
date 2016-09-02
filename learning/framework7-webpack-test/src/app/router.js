/**
 * FileName router
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

import detailModule from './detail/detail'

class Router{
    init(){
        var that = this;
        $$(document).on('pageBeforeInit', (e) => {
            that.pageBeforeInit(e.detail.page);
        }) 
    }

    pageBeforeInit(page){
        switch (page.name){
            case 'detail':
                detailModule.init(page);
                break;

            default:
                break;
        } 
    }
} 

export default new Router();