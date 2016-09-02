/**
 * FileName photoBrowser
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

const photoBrowserMod = function(pics){
    var myPhotoBrowserStandalone = myApp.photoBrowser({
        photos: pics
    });
    return myPhotoBrowserStandalone;
}

export default photoBrowserMod;