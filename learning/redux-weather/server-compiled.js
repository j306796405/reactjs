'use strict';
/*eslint no-console: 0*/

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var devConfig = require('./webpack.config.dev.js');
var prodConfig = require('./webpack.config.prod.js');

var isDeveloping = process.env.NODE_ENV === 'development';

var port = isDeveloping ? 8080 : 9090;

function baseConfig(config, contentBase) {
  return new webpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    progress: true,
    contentBase: contentBase,
    stats: { colors: true } // 用颜色标识
  });
}

var server = void 0;
if (isDeveloping) {
  server = baseConfig(devConfig, "./src");
  console.log("development mode...");
} else {
  server = baseConfig(prodConfig, "./build");
  console.log("production mode...");
}

server.listen(port, "localhost", function (err) {
  if (err) {
    console.log(err);
  }
  console.log('==> 🌎 Listening on ' + process.env.NODE_ENV + ' port ' + port);
});

//# sourceMappingURL=server-compiled.js.map