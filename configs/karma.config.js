var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'app/**/*': [ 'webpack', 'sourcemap' ],
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: ['dots', 'junit'],
    junitReporter: {
      outputDir: 'build/test-reports',
      outputFile: 'test-results.xml',
      useBrowserName: false
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$|\.jsx$/, loader: 'babel' }
        ]
      },
      resolve: {
        alias: {
          lm: path.resolve(__dirname, 'app')
        },
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
          'node_modules',
          'app'
        ],
        root: path.join(__dirname, '')
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
