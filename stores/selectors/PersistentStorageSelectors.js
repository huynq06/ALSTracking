import {createSelector} from 'reselect';

const getPersistentStorage = state => state.persistentStorage;
export function createTokenSelector() {
    return createSelector([getPersistentStorage], persistentStorage => persistentStorage.token);
  }
  