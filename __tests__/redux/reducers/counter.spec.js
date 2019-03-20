import * as alltypes from '../../../src/redux/actions/counter/actionTypes.js';
import {counter} from '../../../src/redux/reducers/counter/index.js';

describe('reducers', () => {
  it('should create an reducer to add a counter', () => {
    const params = 'add';
    const addAction = {
      type: alltypes.ADD_STAR,
      payload: params,
    };
    const initState = {
      num: 1,
    };
    const expectState = {
      num: 2,
    };
    expect(counter(initState, addAction)).toEqual(
      expectState
    );
  });

  it('should create an action to reduce a counter', () => {
    const params = 'add';
    const addAction = {
      type: alltypes.REDUE_STAR,
      payload: params,
    };
    const initState = {
      num: 1,
    };
    const expectState = {
      num: 0,
    };
    expect(counter(initState, addAction)).toEqual(
      expectState
    );
  });
});
