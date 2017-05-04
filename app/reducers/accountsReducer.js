// import faker from 'faker';
// import * as types from '../constants/actionTypes';
//
// const initialState = [];
//
// const accountsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.CREATE_ACCOUNT: {
//       const accountData = {
//         id: faker.random.uuid(),
//         ...action.payload,
//       };
//
//       return [...state, accountData];
//     }
//
//     case types.UPDATE_ACCOUNT: {
//       return state.map((account) => {
//         if (account.id === action.payload.id) {
//           return {
//             ...account,
//             ...action.payload.data,
//           };
//         }
//
//         return account;
//       });
//     }
//
//     case types.DELETE_ACCOUNT: {
//       return state.filter(({ id }) => id !== action.payload);
//     }
//
//     default:
//       return state;
//   }
// };

import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { insert, insertAll, update, remove } from '../utils/mapHelper';

const createAccount = (props) => {
  const { name, icon, balance = 0, initialBalance = 0, initialDate = new Date() } = props;

  return { name, icon, balance, initialBalance, initialDate };
};

const defaultAccounts = [
  createAccount({ name: 'Card', icon: 'credit-card' }),
  createAccount({ name: 'Cash', icon: 'cash-multiple' }),
];

const initialState = insertAll({}, defaultAccounts);

const accountsReducer = handleActions({
  [actionTypes.CREATE_ACCOUNT]: (state, { payload }) => insert(state, createAccount(payload)),
  [actionTypes.UPDATE_ACCOUNT]: (state, { payload }) => update(state, payload._id, payload),
  [actionTypes.DELETE_ACCOUNT]: (state, { payload }) => remove(state, payload),
}, initialState);

export default accountsReducer;
