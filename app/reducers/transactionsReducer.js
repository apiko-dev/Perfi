import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { insertAll, insert, update, remove } from '../utils/stateHelper';

import testTransactions from '../utils/testTransactions';

const createTransaction = (props) => {
  const { value, account, category, date = new Date(), note } = props;

  return { value, account, category, date, note };
};

const initialState = insertAll({}, testTransactions.map(createTransaction));

const transactionsReducer = handleActions({
  [actionTypes.CREATE_TRANSACTION]: (state, { payload }) => insert(
    state,
    createTransaction(payload),
  ),
  [actionTypes.UPDATE_TRANSACTION]: (state, { payload }) => update(state, payload.id, payload),
  [actionTypes.DELETE_TRANSACTION]: (state, { payload }) => remove(state, payload),
}, initialState);

export default transactionsReducer;
