import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { newItem, addItem, updateItem, deleteItem } from '../utils/listHandler';

const createAccount = (props) => {
  const { name, icon, balance = 0, initialBalance = 0, initialDate = new Date() } = props;

  return { name, icon, balance, initialBalance, initialDate };
};

const initialState = [
  newItem(createAccount, { name: 'Card', icon: 'credit-card' }),
  newItem(createAccount, { name: 'Cash', icon: 'cash-multiple' }),
];

const accountsReducer = handleActions({
  [actionTypes.CREATE_ACCOUNT]: (state, { payload }) => addItem(state, createAccount, payload),
  [actionTypes.UPDATE_ACCOUNT]: (state, { payload }) => updateItem(state, payload._id, payload),
  [actionTypes.DELETE_ACCOUNT]: (state, { payload }) => deleteItem(state, payload),
}, initialState);

export default accountsReducer;
