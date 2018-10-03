import React from 'react';
import Avatar from '@/assets/images/avatar.png';
import Home from '@/pages/home';
import ReduxHome from '@/pages/reduxHome';
import Countries from '@/pages/countries';
import Country from '@/pages/country';

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
    parent: '0',
    path: '/page2',
    name: 'page2',
    component: () => <h1>page2</h1>,
  },
  {
    id: '5',
    parent: '0',
    path: '/img',
    name: 'img',
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
    path: '/countries',
    name: 'countries',
    component: Countries,
  },
  {
    id: '7',
    parent: '6-1',
    path: '/country/:name',
    name: 'country',
    component: Country,
  },
];
