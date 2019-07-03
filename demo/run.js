var webpack = require('webpack');
var webpackDevServer = require("webpack-dev-server");
var config = require('./webpack.config');
var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
    publicPath: config.output.publicPath,
});

server.listen(3000);