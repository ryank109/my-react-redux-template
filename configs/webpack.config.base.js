var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

var projectName = 'rk';

var VENDOR_DEPENDENCIES = [
  'classnames',
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'react-redux-popup',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-thunk',
  'reselect',
  'whatwg-fetch'
];

var NODE_ENV = process.env.NODE_ENV;
var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};
env.build = env.production || env.staging;

var mainCss = new ExtractTextPlugin(projectName + '.css');

var config = {
  entry: {
    main: path.join(__dirname, '../app/main.jsx'),
    vendor: VENDOR_DEPENDENCIES
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: projectName + '.js',
    publicPath: '/'
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'app'
    ],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.' + projectName + '.js'),
    mainCss
  ],

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        include: path.join(__dirname, '../app'),
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '../styles'),
        loader: mainCss.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      }
    ]
  },

  postcss: [ autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] }) ]
};

config.resolve.alias = {};
config.resolve.alias[projectName] = path.resolve(__dirname, '../app');
module.exports = config;
