import { combineReducers } from 'redux';
import { stateMap } from './stateMap';
import { stateCommon } from './stateCommon';

export default combineReducers({
  stateMap,
  stateCommon
})
