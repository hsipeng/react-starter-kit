import React from 'react';
import Avatar from '@/assets/images/avatar.png';
import Home from '@/pages/home';
import ReduxHome from '@/pages/reduxHome';

export default [
  {
    id: '1',
    parent: '0',
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
    routes: [],
  },
  {
    id: '2',
    parent: '0',
    path: '/counter',
    name: 'counter',
    component: ReduxHome,
  },
  {
    id: '3',
    parent: '2',
    path: '/counter/page2',
    name: 'counter/page2',
    component: () => <span>page2</span>,
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
];
