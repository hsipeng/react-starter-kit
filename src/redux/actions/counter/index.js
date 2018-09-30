import * as alltypes from './actionTypes';

export const addStar = params => {
  return {
    type: alltypes.ADD_STAR,
    payload: params,
  };
};

export const reduceStar = params => {
  return {
    type: alltypes.REDUE_STAR,
    payload: params,
  };
};
