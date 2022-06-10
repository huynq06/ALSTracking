import {call, put, takeLatest, takeEvery, all} from 'redux-saga/effects';
import { logout } from '../../api/loginApi';
import AppActions from '../actions/AppActions';
import PersistentStorageActions from '../actions/PersistentStorageActions';



function* logoutWatcher() {
    yield put(PersistentStorageActions.setToken({}));
    yield call(logout);
    //yield put(AppActions.fetchAppConfigAsync());
  }
  export default function* () {
    yield all([
      //takeLatest(AppActions.setLanguageAsync.type, setLanguage),
      //takeLatest(AppActions.fetchAppConfigAsync.type, fetchAppConfig),
      //takeLatest(AppActions.setAppConfig.type, setAppConfigWatcher),
      takeLatest(AppActions.logoutAsync.type, logoutWatcher),
    ]);
  }