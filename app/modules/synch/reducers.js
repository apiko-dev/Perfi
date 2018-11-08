import { handleActions } from 'redux-actions';
import R from 'ramda';
import { REHYDRATE } from 'redux-persist/lib/constants';
import types from './types';

const initialState = {
  isAuthorized: false,
  isLoadingBackup: false,
  isLoadingSynch: false,

  lastBackupDate: null,
  lastSynchDate: null,

  user: {
    fullName: '',
  },
};

const authReducer = handleActions(
  {
    [types.LOGIN_USER_SUCCESS]: (state, { payload }) => ({
      ...state,
      user: payload,
      isAuthorized: true,
    }),
    [types.LOGOUT_USER_SUCCESS]: () => ({
      ...initialState,
    }),
    [types.BACKUP_START]: (state) => ({
      ...state,
      isLoadingBackup: true,
    }),
    [types.BACKUP_SUCCESS]: (state) => ({
      ...state,
      lastBackupDate: new Date(),
      isLoadingBackup: false,
    }),
    [types.BACKUP_ERROR]: (state) => ({
      ...state,
      isLoadingBackup: false,
    }),
    [types.SYNCHRONIZATION_START]: (state) => ({
      ...state,
      isLoadingSynch: true,
    }),
    [types.SYNCHRONIZATION_ERROR]: (state) => ({
      ...state,
      isLoadingSynch: false,
    }),
    [types.SYNCHRONIZATION_SUCCESS]: (state) => ({
      ...state,
      lastSynchDate: new Date(),
      isLoadingSynch: false,
    }),
    [REHYDRATE]: (state, { payload }) => ({
      ...state,
      user: R.pathOr({}, ['synch', 'user'], payload),
      lastBackupDate: R.pathOr(null, ['synch', 'lastBackupDate'], payload),
      lastSynchDate: R.pathOr(null, ['synch', 'lastSynchDate'], payload),
      isAuthorized: R.pathOr(null, ['synch', 'isAuthorized'], payload),
    }),
  },
  initialState,
);

export default authReducer;
