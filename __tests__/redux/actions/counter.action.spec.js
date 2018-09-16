import * as alltypes from '../../../src/redux/actions/counter/actionTypes.js';
import * as actions from '../../../src/redux/actions/counter/index.js';

describe('actions', () => {
  it('should create an action to add a counter', () => {
    const params = 'add';
    const expectedAction = {
      type: alltypes.ADD_STAR,
      payload: params,
    };
    expect(actions.addStar(params)).toEqual(expectedAction);
  });

  it('should create an action to reduce a counter', () => {
    const params = 'reduce';
    const expectedAction = {
      type: alltypes.REDUE_STAR,
      payload: params,
    };
    expect(actions.reduceStar(params)).toEqual(
      expectedAction
    );
  });
});
