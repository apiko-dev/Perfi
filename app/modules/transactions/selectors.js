import { createSelector } from 'reselect';
import moment from 'moment';
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
      if (inPeriod(period, transaction.date) && transaction.isFavourite) {
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

export const getTrendsStats = createSelector(
  [
    getTransactionsIds,
    getTransactionsEntities,
    getDateForFiltering,
    getCategoriesEntities,
  ],
  (ids, entities, date, categorEnt) => {
    const data = {
      Income: {},
      Expense: {},
      tickValues: [],
      maxValue: 0,
      totalIncome: 0,
      totalExpense: 0,
    };

    const diff = moment(date.to).diff(date.from, 'month');
    const def = {};

    if (diff <= 12) {
      for (let i = 0; i <= diff; i++) {
        const key = moment(date.to).subtract(i, 'months').startOf('month');
        def[key] = 0;
        data.tickValues.push(key.toString());
      }
      data.Income = def;
      data.Expense = def;
    }

    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ? date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date)) {
        const type = categorEnt[transaction.category].type;

        const startOfMonth = moment(transaction.date).startOf('month').toString();

        if (!data.tickValues.includes(startOfMonth.toString())) {
          data.tickValues.push(startOfMonth.toString());
        }

        const value = Math.abs(transaction.value);
        const currentValue = value + R.pathOr(0, [type, startOfMonth], data);
        if (currentValue > data.maxValue) data.maxValue = currentValue;

        data[`total${type}`] = data[`total${type}`] + value;

        data[type] = {
          ...data[type],
          [startOfMonth]: currentValue,
        };
      }
    });

    const Income = [];
    const Expense = [];

    R.forEachObjIndexed((val, key) => { Income.push({ y: val, date: key }); }, data.Income);
    R.forEachObjIndexed((val, key) => { Expense.push({ y: val, date: key }); }, data.Expense);

    Income.sort((a, b) => +moment(a.date) - +moment(b.date));
    Expense.sort((a, b) => +moment(a.date) - +moment(b.date));

    data.tickValues.sort((a, b) => +moment(a) - +moment(b));


    Income.forEach((element, id) => element.x = id + 1);
    Expense.forEach((element, id) => element.x = id + 1);

    console.log("dataValue", data.totalIncome, data.totalExpense )
    // console.log('{ Income, Expense, tickValues: data.tickValues }', { Income, Expense, tickValues: data.tickValues });
    return {
      Income,
      Expense,
      tickValues: data.tickValues,
      maxValue: data.maxValue + 300,
      totalIncome: data.totalIncome,
      totalExpense: -data.totalExpense,
    };
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
