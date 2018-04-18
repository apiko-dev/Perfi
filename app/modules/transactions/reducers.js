import { handleActions } from 'redux-actions';
import types from './types';
import { insert, insertAll, update, remove } from '../../utils/stateHelper';

const createTransaction = (props) => {
  const { value, account, category, date = new Date(), note } = props;

  return { value, account, category, date, note };
};

const initialState = insertAll({}, []);

const transactionsReducer = handleActions({
  [types.CREATE_TRANSACTION]: (state, { payload }) => insert(
    state,
    createTransaction(payload),
  ),
  [types.UPDATE_TRANSACTION]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRANSACTION]: (state, { payload }) => remove(state, payload),
}, initialState);

export default transactionsReducer;
