import React from 'react';
import LoadingSVG from '@/assets/images/loading.svg';

export const Loading = () => (
  <div className="container">
    <div className="loading-container">
      <img src={LoadingSVG} alt="" />
    </div>
  </div>
);
