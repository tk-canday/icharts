const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    index: './index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[name].js',
    publicPath: 'http://localhost:3000/build/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader'},
      { test: /\.js?$/, exclude: /(node_modules|packages)/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}}
    ]
  },
  devServer: { contentBase: '' },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};
