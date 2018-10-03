const common = require('./config/webpack.common');
const webpackMerge = require('webpack-merge');
const SSR_config = require('./config/webpack.server');

const envs = {
  development: 'dev',
  production: 'prod',
};
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./config/webpack.${env}.js`);
const webpackConfig =
  process.env.NODE_ENV === 'development'
    ? webpackMerge(common, envConfig)
    : [
        webpackMerge(common, envConfig),
        webpackMerge(common, SSR_config),
      ];
module.exports = webpackConfig;
