import createStore from "./createStore";
import reducer, { key, initState } from "../reducers/counter2";

const store = createStore(
  {},
  {
    [key]: reducer
  }
);

export default store;
