import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Clock from '../../src/components/clock';

it('Clock ts', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clock />, div);
});
