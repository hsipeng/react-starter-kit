import { combineReducers } from "redux";
import { counter } from "../reducers/counter";

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    counter: counter,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export const createReducer = (initialState, ACTION_HANDLES) => (
  state = initialState,
  action
) => {
  const handler = ACTION_HANDLES[action.type];
  return handler ? handler(state, action) : state;
};

export default makeRootReducer;
