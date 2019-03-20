import '@babel/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '~/pages/App';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
// becomes dead code in builds other than dev,
// which webpack should pick up and remove.

if (process.env.NODE_ENV === 'development') {
  // 错误处理 overlay 显示
  require('webpack-serve-overlay');
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
