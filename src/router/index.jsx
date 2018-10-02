import React from 'react';
import {renderRoutes} from 'react-router-config';
import Routes from './Routes';
import Header from '@/components/Header';
import LeftMenu from '@/components/leftMenu';
import Footer from '@/components/Footer';

export default () => {
  return (
    <div>
      <Header />
      <div className="container">
        <LeftMenu />
        {renderRoutes(Routes)}
      </div>
      <Footer />
    </div>
  );
};
