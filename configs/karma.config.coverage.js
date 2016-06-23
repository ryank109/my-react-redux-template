var webpack = require('webpack');
var path = require('path');

/**
 * Make sure to update the 'alias' configuration
 */
module.exports = function(config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: ['progress', 'dots', 'junit', 'coverage'],
    junitReporter: {
      outputDir: '../test-reports',
      outputFile: 'test-results.xml',
      useBrowserName: false
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$|\.jsx$/,
            loader: 'babel'
          }
        ],
        preLoaders: [
          {
            test: /\.js$|\.jsx$/,
            include: path.resolve(__dirname, '../app'),
            loader: 'isparta'
          }
        ]
      },
      resolve: {
        alias: {
          rk: path.resolve(__dirname, '../app')
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
    },

    /**
     * Change the type to 'html' if you want HTML report
     */
    coverageReporter: {
      type: 'cobertura',
      dir: '../test-reports/coverage/',
      subdir: function(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      }
    }
  });
};
