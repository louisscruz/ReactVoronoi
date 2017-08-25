var path = require("path");

module.exports = {
  context: __dirname,
  entry: './ReactVoronoi.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './demo/dist/bundle.js'
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
