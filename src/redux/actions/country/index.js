import axios from 'axios';

import {
  ROOT,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY,
} from './actionTypes';

export const fetchCountry = name => async dispatch => {
  try {
    dispatch({type: REQUEST_COUNTRY});
    const res = await axios.get(`${ROOT}/name/${name}`);
    dispatch({type: RECEIVE_COUNTRY, payload: res.data[0]});
  } catch (e) {
    console.log(e);
    dispatch({type: RECEIVE_COUNTRY, payload: {}});
  }
};
