var path = require('path');
var webpack = require('webpack');

module.exports = {
  
  // devServer: {
  //   host: 'localhost',
  //   port: '5000',
  //   compress: true,
  //   contentBase: path.join(__dirname, 'public')
  // },
  
  // entry: path.join(__dirname, 'src/index.js'),
  // output: {
  //   path: path.join(__dirname, 'public'),
  //   filename: 'js/app.js',
  // }

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }

  
}
