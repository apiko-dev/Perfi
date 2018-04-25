import { createActions } from 'redux-actions';
import types from './types';

export const {
  createTransaction,
  updateTransaction,
  deleteTransaction,
  addTransactionToFavourite,
} = createActions(
  types.CREATE_TRANSACTION,
  types.UPDATE_TRANSACTION,
  types.DELETE_TRANSACTION,
  types.DELETE_TRANSACTION,
  types.ADD_TRANSACTION_TO_FAVOURITE,
);
