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
  (transIds, transEnt, date) => {
    const newArray = [];
    transIds.forEach((id) => {
      const transaction = transEnt[id];
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
  (transIds, transEnt, date) => {
    const newArray = [];
    transIds.forEach((id) => {
      const transaction = transEnt[id];
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
  (transIds, transEnt, date, categorEnt, categorType, accountsEnt) => {
    const data = {};
    const type = categorType === 0 ? types.income : types.expense;
    transIds.forEach((id) => {
      const transaction = transEnt[id];
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

// TODO Refactor selectors
export const getTrendsStats = createSelector(
  [
    getTransactionsIds,
    getTransactionsEntities,
    getDateForFiltering,
    getCategoriesEntities,
  ],
  (transIds, transEnt, date, categorEnt) => {
    const data = {
      Income: {},
      Expense: {},
      tickValues: [],
      maxValue: 0,
      totalIncome: 0,
      totalExpense: 0,
    };

    // If the difference between months is more than 12,
    // then miss months in which both, total expense and total income equal 0.
    const monthsDiff = moment(date.to).diff(date.from, 'month');
    const initialValue = {};

    if (monthsDiff <= 12) {
      for (let i = 0; i <= monthsDiff; i++) { // eslint-disable-line
        const key = moment(date.to).subtract(i, 'months').startOf('month');
        initialValue[key] = 0;
        data.tickValues.push(key.toString());
      }
      data.Income = initialValue;
      data.Expense = initialValue;
    }

    transIds.forEach((id) => {
      const transaction = transEnt[id];
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

        const otherType = type === types.income ? types.expense : types.income;
        if (!R.pathOr(false, [otherType, startOfMonth], data)) {
          data[otherType] = {
            ...data[otherType],
            [startOfMonth]: 0,
          };
        }
      }
    });

    let Income = [];
    let Expense = [];

    R.forEachObjIndexed((val, key) => { Income.push({ y: val, date: key }); }, data.Income);
    R.forEachObjIndexed((val, key) => { Expense.push({ y: val, date: key }); }, data.Expense);

    Income.sort((a, b) => +moment(a.date) - +moment(b.date));
    Expense.sort((a, b) => +moment(a.date) - +moment(b.date));

    data.tickValues.sort((a, b) => +moment(a) - +moment(b));

  /**
   * if don't have any statistic per all time,
   * show on the chart only today data with
   * expense and income which equals 0
   */
    if (R.isEmpty(Income) && R.isEmpty(Expense) && R.isEmpty(data.tickValues)) {
      Income = [{ date: new Date(), x: 1, y: 0 }];
      Expense = [{ date: new Date(), x: 1, y: 0 }];
      data.tickValues = [new Date().toString()];
    }

    Income.forEach((element, id) => element.x = id + 1); // eslint-disable-line
    Expense.forEach((element, id) => element.x = id + 1); // eslint-disable-line

    const coeff = +`1${R.join('', R.repeat('0', Math.round(data.maxValue).toString().length - 1))}`;

    /**
     * if maxValue = 0, set it 10 (for correct showing charts)
     */
    const maxValue = (Math.ceil(data.maxValue / coeff) * coeff) || 10;

    return {
      Income,
      Expense,
      tickValues: data.tickValues,
      maxValue,
      totalIncome: Math.round(data.totalIncome),
      totalExpense: -Math.round(data.totalExpense),
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
  (transIds, transEnt, date, categorEnt, categorType) => {
    const data = {};
    let total = 0;
    const type = categorType === 0 ? types.income : types.expense;
    transIds.forEach((id) => {
      const transaction = transEnt[id];
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
          percent: Math.round(val.value * 1000 / total) / 10,
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
  (transIds, transEnt, date, accId) => {
    const newArray = [];
    transIds.forEach((id) => {
      const transaction = transEnt[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date) && transaction.account === accId) {
        newArray.push(transaction);
      }
    });
    return newArray;
  },
);
