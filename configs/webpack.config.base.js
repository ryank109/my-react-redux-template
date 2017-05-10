var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var vendors = require('./vendors');

var NODE_ENV = process.env.NODE_ENV;
var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

Object.assign(env, {
  build: (env.production || env.staging)
});

var mainCss = new ExtractTextPlugin({ filename: 'rk.css' });
var stylePath = path.join(__dirname, '../styles');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      'app': path.resolve(__dirname, '../app')
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../app')
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    mainCss
  ],

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        include: path.join(__dirname, '../app'),
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: stylePath,
        use: mainCss.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  autoprefixer({
                    browsers: ['last 2 version', 'ie >= 11']
                  })
                }
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        include: stylePath,
        use: 'file-loader?mimetype=image/svg+xml&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        include: stylePath,
        use: "file-loader?mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        include: stylePath,
        use: "file-loader?mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        include: stylePath,
        use: "file-loader?mimetype=application/octet-stream&name=fonts/[name].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        include: stylePath,
        use: "file-loader&name=fonts/[name].[ext]"
      }
    ]
  }
};
