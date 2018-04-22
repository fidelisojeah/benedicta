const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildPath = path.join(__dirname, 'dist');

module.exports = {
  entry: [
    // 'babel-polyfill',
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      title: 'Benedicta Grandeur | Welcome to my page ',
      template: path.join(__dirname, 'index.ejs'),
      path: buildPath,
      favicon: './public/favicon.ico',
      inject: 'body',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, './'),
        ],
        loader: 'babel-loader',
        exclude: [/node_modules/,
          path.join(__dirname, 'test'),
        ],
        query: {
          cacheDirectory: true,
          presets: ['react', 'env'],
          plugins: [[
            'transform-class-properties',
            {
              spec: true
            },
          ]]
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader', // Run post css actions
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
    ],
  },
};
