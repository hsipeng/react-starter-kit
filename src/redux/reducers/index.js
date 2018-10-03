import {combineReducers} from 'redux';
import {counter} from './counter';
import Countries from './countries';
import Country from './Country';

export default combineReducers({
  counter: counter,
  countries: Countries,
  country: Country,
});
