import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { insert, insertAll, update, remove } from '../utils/stateHelper';

const createAccount = (props) => {
  const { name, icon, initialBalance = 0, initialDate = new Date() } = props;

  return { name, icon, initialBalance, initialDate };
};

const defaultAccounts = [
  createAccount({ name: 'Card', icon: 'credit-card' }),
  createAccount({ name: 'Cash', icon: 'cash-multiple' }),
];

const initialState = insertAll({}, defaultAccounts);

const accountsReducer = handleActions({
  [actionTypes.CREATE_ACCOUNT]: (state, { payload }) => insert(state, createAccount({
    ...payload,
    balance: payload.initialBalance,
  })),
  [actionTypes.UPDATE_ACCOUNT]: (state, { payload }) => update(state, payload.id, payload),
  [actionTypes.DELETE_ACCOUNT]: (state, { payload }) => remove(state, payload),
}, initialState);

export default accountsReducer;
