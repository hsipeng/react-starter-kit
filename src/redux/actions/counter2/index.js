import update, { updateChain } from "immutability-helper-x";

const ADD_COUNTER = "ADD_COUNTER";
const REDUCE_COUNTER = "REDUCE_COUNTER";

const addCounter = params => dispatch => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockData = null;
      dispatch({
        type: ADD_COUNTER,
        payload: mockData
      });
      resolve(mockData);
    }, 200);
  });
};

const reduceCounter = params => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockData = null;
      dispatch({
        type: REDUCE_COUNTER,
        payload: mockData
      });
      resolve(mockData);
    }, 200);
  });
};

const ACTION_HANLDERS = {
  [ADD_COUNTER]: (state, action) => {
    let totleNum = state.num + 1;
    // return {
    //   ...state,
    //   num: totleNum
    // };
    return update.$set(state, "num", totleNum);
  },
  [REDUCE_COUNTER]: (state, action) => {
    let totleNum = state.num - 1;
    totleNum < 0 ? (totleNum = 0) : totleNum;
    // return {
    //   ...state,
    //   num: totleNum
    // };
    return update.$set(state, "num", totleNum);
  }
};

export const actions = {
  addCounter,
  reduceCounter
};

export default ACTION_HANLDERS;
