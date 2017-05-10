var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack.config.base.js');
var vendors = require('./vendors');

module.exports = merge(config, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: [path.join(__dirname, '../app/main.jsx'), 'webpack-hot-middleware/client'],
    vendor: vendors.concat(['webpack-hot-middleware/client'])
  },
  plugins: [
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
});
