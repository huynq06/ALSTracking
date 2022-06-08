import { combineReducers } from '@reduxjs/toolkit';
import PersistentStorageReducer from './PersistentStorageReducer';

const rootReducer = combineReducers({
  persistentStorage: PersistentStorageReducer,
});

export default rootReducer;
