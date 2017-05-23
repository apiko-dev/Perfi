import { createActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

export const { createTransfer, updateTransfer, deleteTransfer } = createActions(
  actionTypes.CREATE_TRANSFER,
  actionTypes.UPDATE_TRANSFER,
  actionTypes.DELETE_TRANSFER,
);
