import * as alltypes from '../../actions/counter/actionTypes';

let initState = {
  num: 0,
};

export function counter(state = initState, action) {
  let totleNum = 0;
  switch (action.type) {
    case alltypes.ADD_STAR:
      totleNum = state.num + 1;
      return {
        ...state,
        num: totleNum,
      };
    case alltypes.REDUE_STAR:
      totleNum = state.num - 1;
      totleNum < 0 ? (totleNum = 0) : totleNum;
      return {
        ...state,
        num: totleNum,
      };
    default:
      return state;
  }
}
