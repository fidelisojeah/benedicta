const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
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
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost', // Defaults to `localhost`
    port: 8000, // Defaults to 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      title: 'Benedicta Grandeur | Welcome to my page ',
      template: path.join(__dirname, 'index.ejs'),
      filename: 'index.html',
      favicon: './public/favicon.ico',
      inject: 'body',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin({
      //     multiStep: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
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
        test: /\.js$/,
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
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
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
