import React from 'react';
import _ from 'lodash';
import Clock from './clock';

export default () => {
  return (
    <footer>
      <span>
        &copy;copyright.&nbsp;&nbsp;
        <Clock />
      </span>
      <label>
        &nbsp;&nbsp;
        {_.each(['1', '2', '3']).join(',')}
      </label>
    </footer>
  );
};
