import { createAction } from 'redux-actions';
import types from './types';

export const loginUserStart = createAction(types.LOGIN_USER_START);
export const loginUserSuccess = createAction(types.LOGIN_USER_SUCCESS);

export const logOutUserSuccess = createAction(types.LOGOUT_USER_SUCCESS);

export const backupStart = createAction(types.BACKUP_START);
export const backupSuccess = createAction(types.BACKUP_SUCCESS);
export const backupError = createAction(types.BACKUP_ERROR);

export const synchronizationStart = createAction(types.SYNCHRONIZATION_START);
export const synchronizationSuccess = createAction(types.SYNCHRONIZATION_SUCCESS);
export const synchronizationError = createAction(types.SYNCHRONIZATION_ERROR);
