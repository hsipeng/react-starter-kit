import AsyncLoad from '../components/AsyncLoad';
import React from 'react';
import Avatar from '../assets/images/avatar.png';

const AsyncHome = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "reduxHome" */ '../pages/home'),
});

const AsyncReduxHome = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "reduxHome" */ '../pages/reduxHome'),
});

const AsyncReduxHome2 = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "reduxHome2" */ '../pages/reduxHome2'),
});

const AsyncAjax = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "AsyncAjax" */ '../pages/ajax'),
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
  {
    id: '3',
    parent: '2',
    path: '/counter/page2',
    name: 'counter/page2',
    component: () => <span>page2</span>,
  },
  {
    id: '4',
    parent: '0',
    path: '/counter2',
    name: 'counter2',
    component: AsyncReduxHome2,
    routes: [],
  },
  {
    id: '5',
    parent: '4',
    path: '/counter2/img',
    name: 'counter2/img',
    component: () => (
      <div>
        <img src={Avatar} />
      </div>
    ),
    routes: [],
  },
  {
    id: '6',
    parent: '0',
    path: '/http',
    name: 'http',
    component: AsyncAjax,
    routes: [],
  },
];

export default routes;
