/**
 * FileName detail
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

import './detail.less';

import Tool from '../utils/tool';
import detailTpl from './detail.tpl.html';
import xhr from '../utils/xhr';
import loadingMod from './../components/loading';
import actionSheetMod from './../components/actionSheet';
import photoBrowserMod from './../components/photoBrowser';
import modalMod from './../components/modal';

class Detail {
    init(page) {
        var _ID = page.query.id;
        this.getTopicDetail(_ID);
    }

    getTopicDetail(id) {
        loadingMod.show();
        var that = this, 
            params = { 
                id: id,
                success: (res) => {
                    loadingMod.hide();
                    var detailTPl = Tool.renderTpl(detailTpl, res.data);
                    $$('.detail-page').append(detailTPl);
                    that.bindEvents();
                },
                error: (err) => {
                    console.log(err);
                }
            };
        xhr.getTopicById(params);
    }

    showActionSheet() {
        var btns = [{
            text: '回复',
            onClick(){
                modalMod.alert('你点击了回复');
            }
        }]
        actionSheetMod(btns);
    }

    bindPhotos($$pics) {
        const pics = [];
        $$pics.each(function(index, pic){
            pics.push(pic.src);
        })
        return photoBrowserMod(pics);
    }

    bindEvents() {
        $$('.detail-page').on('click', '.comment-list', this.showActionSheet);

        var $$imgs = $$('.detail-page').find('.topic-content img'),
            myPhotoBrowser = this.bindPhotos($$imgs);

        $$imgs.on('click', function () {
            myPhotoBrowser.open();
        });
    }
}

export default new Detail(); 