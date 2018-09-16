import {
  applyMiddleware,
  compose,
  createStore as createReduxStore
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import makeRootReducer from "./reducers";

export default (initialState = {}, initialReducer = {}) => {
  /**
  |--------------------------------------------------
  | Middleware Configuration
  |--------------------------------------------------
  */
  const middleware = [thunk];

  /**
  |--------------------------------------------------
  | Store Enhancers
  |--------------------------------------------------
  */
  const enhancers = [];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    console.log("现在的环境是", process.env.NODE_ENV);
    middleware.push(logger);
  }

  /**
  |--------------------------------------------------
  | Store Instantiation and HMR Setup
  |--------------------------------------------------
  */
  const store = createReduxStore(
    makeRootReducer(initialReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
  store.asyncReducers = {
    ...initialReducer
  };

  return store;
};
