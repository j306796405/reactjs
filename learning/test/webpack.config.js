/**
 * FileName webpack.config.js
 * Date 2016-07-14
 * Created by jianglinj
 */
var path = require('path'),
    node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app:"./app.js"
    }, //演示单入口文件
    output: {
        path: path.join(__dirname, 'dev'), //打包输出的路径
        filename: '[name].entry.js', //打包后的名字
    },
    module: {
        loaders: [{
            test: /\.js|\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?presets[]=es2015' //加载使用loader
        }
        ]
    },
    plugins: [
    ],
    watch: true
};