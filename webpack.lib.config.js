'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'index.min': './src/index.js',
  },

  externals: ['react', 'react-dom', 'prop-types', 'redux', 'react-redux'],

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
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
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
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
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
