/**
 * FileName tool
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

class Tools{
    renderTpl(tpl, topics){
        return Template7.compile(tpl)(topics);
    }
}

export default new Tools();