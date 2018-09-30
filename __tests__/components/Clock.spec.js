import React from 'react';
import ReactDOM from 'react-dom';
import Clock from '../../src/components/clock';

it('Clock', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clock />, div);
});
