import { createSelector } from 'reselect';
import R from 'ramda';
import {
  transfersSum,
  accountTransactionsSum as transactionsSum,
} from '../../utils/transactionsHelpers';


const getAccountsIds = state => R.pathOr([], ['accounts', 'ids'], state);
const getState = state => state;
const getAccountsEntities = state => R.pathOr({}, ['accounts', 'byId'], state);


export const getAccounts = createSelector(
  [
    getAccountsIds,
    getAccountsEntities,
    getState,
  ],

  (ids, entities, state) => R.map(accId => ({
    ...entities[accId],
    balance:
     entities[accId].initialBalance +
     transfersSum(state.transfers, accId) +
     transactionsSum(state.transactions, state.categories, accId),
  }), ids),
);


export const getTotalBalance = createSelector(
  [getAccounts], accounts => accounts.reduce((old, current) => old + current.balance, 0),
);
