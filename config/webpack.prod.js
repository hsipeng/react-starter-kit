const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');
const config = require('../config');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: commonPaths.entryPath,
  output: {
    filename: `${commonPaths.jsFolder}/[name].[hash].js`,
    path: commonPaths.outputPath,
    publicPath: commonPaths.assetsPublicPath,
    chunkFilename: `${
      commonPaths.jsFolder
    }/[name].[chunkhash].js`,
    libraryTarget: 'umd',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
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
          'sass-loader',
        ],
      },
    ],
  },
  externals: {
    // 排除打包选项
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    'react-router-dom': {
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom',
      amd: 'react-router-dom',
      root: 'ReactRouterDOM',
    },
    'react-redux': {
      commonjs: 'react-redux',
      commonjs2: 'react-redux',
      amd: 'react-redux',
      root: 'ReactRedux',
    },
    'redux-logger': {
      commonjs: 'redux-logger',
      commonjs2: 'redux-logger',
      amd: 'redux-logger',
      root: 'logger',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
      root: 'moment',
    },
    '@babel/polyfill': {
      commonjs: '@babel/polyfill',
      commonjs2: '@babel/polyfill',
      amd: '@babel/polyfill',
    },
    redux: {
      commonjs: 'redux',
      commonjs2: 'redux',
      amd: 'redux',
      root: 'Redux',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled',
    },
  },
  plugins: [
    new CleanWebpackPlugin(commonPaths.cleanPaths, {
      // 设置起始路径，正确清理build
      root: path.resolve(__dirname, '../'),
    }),
    new HtmlWebpackPlugin({
      title: `${config.appName}`,
      template: commonPaths.templateProdPath,
    }),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`,
      chunkFilename: `${commonPaths.cssFolder}/[name].css`,
    }),
    new CopyWebpackPlugin([
      {
        context: commonPaths.staticPath,
        from: '**/*',
        to: commonPaths.staticFolder,
        // ignore: ['*.md'],
      },
    ]),
    // new BundleAnalyzerPlugin(),
  ],
};
