import AsyncLoad from '~/components/AsyncLoad';
import * as React from 'react';
const Avatar = require('../assets/images/avatar.png');

const AsyncHome = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "reduxHome" */ '~/pages/home'),
});

const AsyncReduxHome = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "reduxHome" */ '~/pages/reduxHome'),
});

const routes = [
  {
    id: '1',
    parent: '0',
    path: '/',
    name: 'home',
    component: AsyncHome,
    routes: [],
  },
  {
    id: '2',
    parent: '0',
    path: '/counter',
    name: 'counter',
    component: AsyncReduxHome,
  },
];

export default routes;
