import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Router from './router';
import {BrowserRouter} from 'react-router-dom';
import '@/assets/style/index.css';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
