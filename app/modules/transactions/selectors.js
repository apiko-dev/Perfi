import { createSelector } from 'reselect';
import R from 'ramda';
import { inPeriod } from '../../utils/transactionsHelpers';
import { categoriesTypes as types } from '../../constants/categories';
import moment from 'moment';

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


const def = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};


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
    };
    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ? date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date)) {
        const type = categorEnt[transaction.category].type;

        // const diff = moment(period.to).diff(period.from, "month");

        const startOfMonth = +moment(transaction.date).startOf('month');


        // if (diff === 0) {
        //
        // } else if (diff <= 31) {
        //   dateNumber = moment(transaction.date).startOf('month');
        //   console.log("dateNumber" , dateNumber)
        // } else {
        //
        // }

        // const dateNumber = moment(transaction.date).startOf('month').format('M');

        data.tickValues.push(moment(startOfMonth).format('MM/YYYY'));

        data[type] = {
          ...data[type],
          [startOfMonth]: Math.abs(transaction.value) + R.pathOr(0, [type, startOfMonth], data),
        };
      }
    });

    const Income = [];
    const Expense = [];

    R.forEachObjIndexed((val, key) => { Income.push({ y: val, date: +key }); }, data.Income);
    R.forEachObjIndexed((val, key) => { Expense.push({ y: val, date: +key }); }, data.Expense);


    R.sortBy(R.prop('date'), Income);
    R.sortBy(R.prop('date'), Expense);

    Income.sort((a, b) => a.date - b.date);
    Expense.sort((a, b) => a.date - b.date);
    data.tickValues.sort();

    Income.forEach((element, id) => element.x = id + 1);
    Expense.forEach((element, id) => element.x = id + 1);

    // res {
   //    "Expense": [
   //       Object {
   //         "x": "5",
   //         "y": 1500,
   //       },
   //    ],
   //     "Income": [
   //       Object {
   //         "x": "5",
   //         "y": 1500,
   //       },
   //     ],
   //   }

    // console.log('res', { Income, Expense });
    console.log("{ Income, Expense, tickValues: data.tickValues }", { Income, Expense, tickValues: data.tickValues })
    return { Income, Expense, tickValues: data.tickValues };
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
