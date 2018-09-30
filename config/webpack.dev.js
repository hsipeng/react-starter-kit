const commonPaths = require('./paths');
const config = require('./index');
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');
const convert = require('koa-connect');
const Router = require('koa-router');
const webpackServeWaitpage = require('webpack-serve-waitpage');
const internalIp = require('internal-ip');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const router = new Router();

// api 代理
const proxyOptions = {
  target: 'http://localhost:3000/',
  changeOrigin: true,
  // ... see: https://github.com/chimurai/http-proxy-middleware#options
};

router.get('/api', convert(proxy(proxyOptions)));

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    publicPath: commonPaths.assetsPublicPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
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
                // require('cssnano')()  //压缩css
              ],
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `${config.appName}-dev`,
      template: commonPaths.templateDevPath,
    }),
  ],
};

// webpack-serve 配置开始
module.exports.serve = {
  content: [__dirname],
  add: (app, middleware, options) => {
    // Be sure to pass the options argument from the arguments
    // build waiting page
    app.use(
      webpackServeWaitpage(options, {
        title: 'Development Server (Dev)',
        theme: 'default',
      })
    );

    // history api fallback 配置开始
    const historyOptions = {
      disableDotRule: true,
      verbose: true,
      htmlAcceptHeaders: [
        'text/html',
        'application/xhtml+xml',
      ],
      // ... see: https://github.com/bripkens/connect-history-api-fallback#options
    };

    app.use(convert(history(historyOptions)));

    // ourselves
    middleware.webpack().then(() => {
      middleware.content({
        index: 'index.htm',
      });

      // this example assumes router must be added last
      app.use(router.routes());
    });
  },
  // local ip
  host: internalIp.v4.sync(),
};
