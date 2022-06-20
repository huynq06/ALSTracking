import { combineReducers } from '@reduxjs/toolkit';
import PersistentStorageReducer from './PersistentStorageReducer';
import flightsReducer from './flights'
import LoadingReducer from './LoadingReducer';
const rootReducer = combineReducers({
  loading: LoadingReducer,
  persistentStorage: PersistentStorageReducer,
  flights:flightsReducer
});

export default rootReducer;
