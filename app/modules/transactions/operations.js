import {
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from './actions';


const addTransactionToFavourites = id => async (dispatch, getState) => {
  const transaction = getState().transactions.byId[id];
  const updated = { ...transaction, isFavourite: true };
  dispatch(updateTransaction(updated));
};


const onDeleteFromFavourites = id => async (dispatch, getState) => {
  const transaction = getState().transactions.byId[id];
  const updated = { ...transaction, isFavourite: false };
  dispatch(updateTransaction(updated));
};

export default {
  createTransaction,
  updateTransaction,
  deleteTransaction,
  addTransactionToFavourites,
  onDeleteFromFavourites,
};
