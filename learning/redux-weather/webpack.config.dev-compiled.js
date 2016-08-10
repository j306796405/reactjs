'use strict';

var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: [
  // 'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', path.resolve(__dirname, 'src/app/index.js') // 定义入口文件
  ],
  output: { // 定义出口目录
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/' // html引用路径
  },
  resolve: { // resolve 指定可以被 import 的文件后缀
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 检测哪些文件需要此loader，是一个正则表达式，用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel'], // 加载模块 "babel" 是 "babel-loader" 的缩写
      include: path.join(__dirname, 'src')
    }, {
      test: /(\.css|\.scss)$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['url?limit=10000&name=img/[hash:8].[name].[ext]', 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/app/index.tpl.html',
    inject: 'body',
    filename: 'index.html'
  }), new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(), new OpenBrowserPlugin({ url: 'http://localhost:8080/' })]
};

module.exports = config;

//# sourceMappingURL=webpack.config.dev-compiled.js.map