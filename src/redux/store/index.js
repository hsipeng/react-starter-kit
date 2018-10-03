import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

let middlewares = [];
middlewares.push(reduxThunk);
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export default createStore(
  rootReducer,
  {},
  applyMiddleware(...middlewares)
);
