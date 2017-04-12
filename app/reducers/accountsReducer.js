import { handleActions } from 'redux-actions';
import uuid from 'uuid';
import R from 'ramda';
import actionTypes from '../constants/actionTypes';

const newAccount = (props) => {
  const { name, icon, balance = 0, initialBalance = 0, initialDate = new Date() } = props;

  return {
    _id: uuid(),
    name,
    icon,
    balance,
    initialBalance,
    initialDate,
  };
};

const createAccount = (accs, newAccProps) => [...accs, newAccount(newAccProps)];

const neededAccount = R.propEq('_id');

const deleteAccount = (accs, accId) => R.reject(neededAccount(accId), accs);

const findAccount = (accs, accId) => R.find(neededAccount(accId), accs);

const updateAccount = (accs, accToUpdate) => {
  const existingAcc = findAccount(accs, accToUpdate._id);

  return existingAcc ? [
    R.merge(existingAcc, accToUpdate),
    ...deleteAccount(accs, accToUpdate._id),
  ] : accs;
};

const initialState = [
  newAccount({ name: 'Card', icon: 'credit-card' }),
  newAccount({ name: 'Cash', icon: 'cash-multiple' }),
];

const accountsReducer = handleActions({
  [actionTypes.CREATE_ACCOUNT]: (state, action) => createAccount(state, action.payload),
  [actionTypes.UPDATE_ACCOUNT]: (state, action) => updateAccount(state, action.payload),
  [actionTypes.DELETE_ACCOUNT]: (state, action) => deleteAccount(state, action.payload),
}, initialState);

export default accountsReducer;
