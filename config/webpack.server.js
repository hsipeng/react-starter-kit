const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const commonPaths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: commonPaths.serverEntry,
  output: {
    path: commonPaths.outputPath,
    filename: commonPaths.serverFileName,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
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
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: false,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => [
                // require('postcss-import')({root: loader.resourcePath}),
                require('autoprefixer')(), //CSS浏览器兼容
                require('cssnano')(), //压缩css
              ],
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': commonPaths.srcPath,
    },
  },
  plugins: [
    new ProgressBarPlugin(),
    // lodash load
    new LodashModuleReplacementPlugin(),
    // moment
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /zh-cn/
    ),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`,
      chunkFilename: `${commonPaths.cssFolder}/[name].css`,
    }),
  ],
  externals: [webpackNodeExternals()],
};
