var path = require('path');

module.exports = {
  context: __dirname,
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, 'demo', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
