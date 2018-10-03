import axios from 'axios';

import {
  ROOT,
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
} from './actionTypes';

export const fetchCountries = () => async dispatch => {
  try {
    dispatch({type: REQUEST_COUNTRIES});
    const res = await axios.get(`${ROOT}/all`);
    dispatch({type: RECEIVE_COUNTRIES, payload: res.data});
  } catch (e) {
    console.log(e);
    dispatch({type: RECEIVE_COUNTRIES, payload: []});
  }
};
