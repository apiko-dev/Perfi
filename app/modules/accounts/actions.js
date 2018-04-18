import { createActions } from 'redux-actions';
import types from './types';

export const { createAccount, updateAccount, deleteAccount } = createActions(
  types.CREATE_ACCOUNT,
  types.UPDATE_ACCOUNT,
  types.DELETE_ACCOUNT,
);
