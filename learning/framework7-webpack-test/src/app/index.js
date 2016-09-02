/**
 * FileName index
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict'

import 'framework7';
// import 'framework7.material.css';
// import 'framework7.material.color.css';
import 'framework7.ios.css';
import 'framework7.ios.colors.css';
import './../assets/css/app.less'

import mainModule from './main/main';
import routerModule from './router';

var app = {
    init(){
        window.$$ = Dom7;
        window.myApp = new Framework7({
            // Enable Material theme
            material: true
        })
        myApp.addView('.view-main', {
            domCache: true
        }) 

        mainModule.init();
        routerModule.init();
    } 
} 

app.init();  