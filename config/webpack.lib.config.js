'use strict';

const webpack = require('webpack');
const path = require('path');

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};
const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
};
const propTypesExternal = {
  root: 'PropTypes',
  commonjs2: 'prop-types',
  commonjs: 'prop-types',
  amd: 'prop-types',
};
const reduxExternal = {
  root: 'Redux',
  commonjs2: 'redux',
  commonjs: 'redux',
  amd: 'redux',
};

module.exports = {
  entry: {
    modal: './src/package/index.js',
    'modal.min': './src/package/index.js',
  },

  externals: {
    react: reactExternal,
    'react-dom': reactDOMExternal,
    'prop-types': propTypesExternal,
    redux: reduxExternal,
  },

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
