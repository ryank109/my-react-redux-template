'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./webpack.config.base.js');
var VENDOR_DEPENDENCIES = config.entry.vendor;
var fontAwesomeCss = new ExtractTextPlugin("font-awesome.css");

config.devtool = 'cheap-module-eval-source-map';
config.entry = {
  main: [path.join(__dirname, '../app/main.jsx'), 'webpack-hot-middleware/client' ],
  vendor: VENDOR_DEPENDENCIES.concat(['webpack-hot-middleware/client'])
};
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  fontAwesomeCss
]);
config.module.loaders = config.module.loaders.concat([
  {
    test: /\.scss$/,
    include: path.join(__dirname, '../node_modules/font-awesome'),
    loader: fontAwesomeCss.extract("css!sass")
  },
  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
  {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
  {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
  {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
  {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"}
]);

module.exports = config;
