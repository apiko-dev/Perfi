import { createSelector } from 'reselect';
import R from 'ramda';
import { inPeriod } from '../../utils/transactionsHelpers';
import { categoriesTypes as types } from '../../constants/categories';

const getTransactionsIds = state => R.pathOr([], ['transactions', 'ids'], state);
const getTransactionsEntities = state => R.pathOr({}, ['transactions', 'byId'], state);
const getDateForFiltering = (_, props) => R.pathOr('', ['dateForFiltering'], props);
const getCategoriesEntities = state => R.pathOr({}, ['categories', 'byId'], state);
const getCategoryTypeForFiltering = (_, props) => R.pathOr('0', ['selectedTabIndex'], props);
const getAccountsEntities = state => R.pathOr({}, ['accounts', 'byId'], state);
const getAccountId = (_, props) => R.pathOr('0', ['accountId'], props);


export const getTransactions = createSelector(
  [getTransactionsIds, getTransactionsEntities, getDateForFiltering],
  (ids, entities, date) => {
    const newArray = [];
    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date)) {
        newArray.push(transaction);
      }
    });

    return newArray;
  },
);

export const getFavouritesTransactions = createSelector(
  [getTransactionsIds, getTransactionsEntities, getDateForFiltering],
  (ids, entities, date) => {
    const newArray = [];
    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date) && transaction.isFavourites) {
        newArray.push(transaction);
      }
    });

    return newArray;
  },
);

export const getAccountsStats = createSelector(
  [
    getTransactionsIds,
    getTransactionsEntities,
    getDateForFiltering,
    getCategoriesEntities,
    getCategoryTypeForFiltering,
    getAccountsEntities,
  ],
  (ids, entities, date, categorEnt, categorType, accountsEnt) => {
    const data = {};
    const type = categorType === 0 ? types.income : types.expense;
    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ? date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date) && categorEnt[transaction.category].type === type) {
        data[transaction.account] = {
          value: transaction.value + R.pathOr(0, [transaction.account, 'value'], data),
          color: accountsEnt[transaction.account].color,
          accName: accountsEnt[transaction.account].name,
        };
      }
    });
    const res = [];
    R.forEachObjIndexed(
      (value, key) => {
        res.push({ x: key, y: Math.abs(value.value), fill: value.color, name: value.accName });
      }, data
    );
    // [{ x: 1, y: 1, fill: "#c43a31" }]
    return res;
  },
);

export const getCategoriesStats = createSelector(
  [
    getTransactionsIds,
    getTransactionsEntities,
    getDateForFiltering,
    getCategoriesEntities,
    getCategoryTypeForFiltering,
  ],
  (ids, entities, date, categorEnt, categorType) => {
    const data = {};
    let total = 0;
    const type = categorType === 0 ? types.income : types.expense;
    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ? date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date) && categorEnt[transaction.category].type === type) {
        data[transaction.category] = {
          value: transaction.value + R.pathOr(0, [transaction.category, 'value'], data),
          name: categorEnt[transaction.category].name,
        };
        total = transaction.value + total;
      }
    });
    const res = [];
    R.forEachObjIndexed(
      (val, key) => {
        res.push({
          id: key,
          name: val.name,
          value: val.value,
          percent: Math.round(val.value * 100 / total),
        });
      }, data
    );
    return res;
  },
);

export const getCurrentAccountTransaction = createSelector(
  [
    getTransactionsIds,
    getTransactionsEntities,
    getDateForFiltering,
    getAccountId,
  ],
  (ids, entities, date, accId) => {
    const newArray = [];
    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date) && transaction.account === accId) {
        newArray.push(transaction);
      }
    });
    return newArray;
  },
);
