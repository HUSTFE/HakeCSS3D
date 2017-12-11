var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'HakeCSS3D';

var plugins = [], outputFile;

plugins.push(new UglifyJsPlugin({ minimize: true }));
outputFile = libraryName + '.min.js';

var config = {
  entry: './src/index',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    aliasFields: ['browser'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: plugins
};

module.exports = config;
