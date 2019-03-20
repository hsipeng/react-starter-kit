const commonPaths = require('./paths');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.ts|\.tsx|\.js|\.jsx$/,
        loader: [
          'babel-loader',
          'awesome-typescript-loader',
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 超出40960 = 40kb 默认 file-loader
              // file-loader 输出目录
              outputPath: commonPaths.imagesFolder,
              limit: 40960,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': commonPaths.srcPath,
    },
  },
  plugins: [
    new ProgressBarPlugin(),
    new CopyWebpackPlugin([
      {
        context: commonPaths.publicPath,
        from: 'favicon.ico',
        to: commonPaths.outputPath,
        // ignore: ['*.md'],
      },
    ]),
    // lodash load
    new LodashModuleReplacementPlugin(),
    // moment
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /zh-cn/
    ),
  ],
};
