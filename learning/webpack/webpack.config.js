/**
 * FileName webpack.config.js
 * Date 2016-07-18
 * Created by jianglinj
 */
<!-- webpack.config.js -->
var webpack = require('webpack');
var path = require('path');
var config = {
    entry: [
        path.resolve(__dirname, 'app/index.js')       // 定义入口文件
    ],
    output: {                                       // 定义出口目录
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {                                      // resolve 指定可以被 import 的文件后缀
        extensions: ['', '.js', '.jsx']
    },
    module: {
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;