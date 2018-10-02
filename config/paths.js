const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  srcPath: path.resolve(__dirname, '../', 'src'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  staticPath: path.resolve(__dirname, '../', 'static'),
  publicPath: path.resolve(__dirname, '../', 'public'),
  serverFileName: 'server.js',
  serverEntry: path.resolve(
    __dirname,
    '../',
    'server/index.js'
  ),
  assetsPublicPath: '/',
  cleanPaths: ['build'],
  entryPath: path.resolve(
    __dirname,
    '../',
    'src/index.jsx'
  ),
  templatePath: path.resolve(
    __dirname,
    '../',
    'src/template.html'
  ),
  templateDevPath: path.resolve(
    __dirname,
    '../',
    'public/template.dev.html'
  ),
  templateProdPath: path.resolve(
    __dirname,
    '../',
    'public/template.prod.html'
  ),
  imagesFolder: `assets/images`,
  fontsFolder: `assets/fonts`,
  cssFolder: `assets/css`,
  jsFolder: `assets/js`,
  staticFolder: `static`,
};
