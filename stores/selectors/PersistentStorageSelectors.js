import {createSelector} from 'reselect';

const getPersistentStorage = state => state.persistentStorage;
export function createTokenSelector() {
    return createSelector([getPersistentStorage], persistentStorage => persistentStorage.token);
  }
  export function createCurrentUserSelector() {
    return createSelector([getPersistentStorage], persistentStorage => persistentStorage.currentUser);
  }
  
  export function createVerifyTokenSelector() {
    return createSelector([getPersistentStorage], persistentStorage => persistentStorage.verifyToken);
  }
  
  export function createTenantSelector() {
    return createSelector([getPersistentStorage], persistentStorage => persistentStorage.tenant);
  }
  
  