const webpackNodeExternals = require('webpack-node-externals');
const commonPaths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: commonPaths.serverEntry,
  output: {
    path: commonPaths.outputPath,
    filename: commonPaths.serverFileName,
  },
  module: {
    rules: [
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
      {
        test: /\.scss$/,
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
          {loader: 'sass-loader'},
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`,
      chunkFilename: `${commonPaths.cssFolder}/[name].css`,
    }),
  ],
  externals: [webpackNodeExternals()],
};
