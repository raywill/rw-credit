var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 4000;
var host = 'edu.xiaoheqingting.com';
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at ' + host + ':' + port);
});
