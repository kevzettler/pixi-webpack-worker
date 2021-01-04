const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  devServer:{
    static: path.resolve(__dirname, './public'),
    port: 3000,
    host: 'localhost'
  },

  module: {},

  resolve: {
    extensions: [ '.js' ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },

  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
};
