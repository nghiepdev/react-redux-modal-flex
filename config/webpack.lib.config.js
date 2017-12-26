'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    modal: './src/package/index.js',
    'modal.min': './src/package/index.js',
  },

  externals: ['react', 'react-dom', 'prop-types', 'redux', 'react-redux'],

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactReduxModalFlex',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false,
        comparisons: false,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
  ],

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        },
      },
    ],
  },
};
