/**
 * FileName index
 * Date 2016-09-02
 * Created by jianglinj
 */
'use strict';

require('framework7');

require('framework7.ios.css');

require('framework7.ios.colors.css');

require('./../assets/css/app.less');

var _main = require('./main/main');

var _main2 = _interopRequireDefault(_main);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = {
    init: function init() {
        window.$$ = Dom7;
        window.myApp = new Framework7({
            // Enable Material theme
            // material: true,
            pushState: true,
            animateNavBackIcon: true,
            swipeBackPage: false
        });
        myApp.addView('.view-main', {
            dynamicNavbar: true
            // domCache: true
        });

        _main2.default.init();
        _router2.default.init();
    }
};
// import 'framework7.material.css';
// import 'framework7.material.colors.css';


app.init();

//# sourceMappingURL=index-compiled.js.map