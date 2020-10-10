const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },

  resolve: {
    symlinks: false,
  },

  optimization:
    process.argv.indexOf('-p') === -1
      ? {}
      : {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              output: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ],
      },


};
