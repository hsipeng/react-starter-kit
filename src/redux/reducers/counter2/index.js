import { createReducer } from "../../store/reducers";
import ACTION_HANLDERS from "../../actions/counter2";
export let initState = {
  num: 0
};

export const key = "counter2";
export default createReducer(initState, ACTION_HANLDERS);
