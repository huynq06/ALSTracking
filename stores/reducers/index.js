import { combineReducers } from '@reduxjs/toolkit';
import PersistentStorageReducer from './PersistentStorageReducer';
import flightsReducer from './flights'
const rootReducer = combineReducers({
  persistentStorage: PersistentStorageReducer,
  flights:flightsReducer
});

export default rootReducer;
