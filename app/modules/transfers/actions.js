import { createActions } from 'redux-actions';
import types from './types';

export const { createTransfer, updateTransfer, deleteTransfer } = createActions(
  types.CREATE_TRANSFER,
  types.UPDATE_TRANSFER,
  types.DELETE_TRANSFER,
);
