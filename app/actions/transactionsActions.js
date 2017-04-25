import { createActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

export const { createTransaction, updateTransaction, deleteTransaction } = createActions(
  actionTypes.CREATE_TRANSACTION,
  actionTypes.UPDATE_TRANSACTION,
  actionTypes.DELETE_TRANSACTION,
);
