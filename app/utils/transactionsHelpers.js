import R from 'ramda';
import { categoriesTypes } from '../constants/categories';

export const eqAccount = accountId => R.propEq('account', accountId);

export const inDateRange = period => ({ date }) => {
  const dt = new Date(date);

  return R.and(
    R.gte(dt.getTime(), period.from.getTime()),
    R.lt(dt.getTime(), period.to.getTime()),
  );
};

export const inPeriod = (period, date) => {
  const dt = new Date(date).getTime();
  const from = +period.from;
  const to = +period.to;

  return R.and(R.gte(dt, from), R.lt(dt, to));
};

export const filterByAccountAndDate = (transactions, accountId, period) => {
  let check = eqAccount(accountId);

  if (period) {
    check = R.both(check, inDateRange(period));
  }

  return R.filter(check, R.values(transactions.byId));
};

export const groupByCategories = R.groupBy(R.prop('category'));

export const getTransactionsByCategories = R.pipe(filterByAccountAndDate, groupByCategories);

export const isExpense = R.curry((categoriesById, transaction) => R.propEq(
  'type', categoriesTypes.expense, categoriesById[transaction.category],
));

export const isIncome = R.curry((categoriesById, transaction) => R.propEq(
  'type', categoriesTypes.income, categoriesById[transaction.category],
));

export const accountTransactionsSum = (transactions, categories, accId) => R.reduce(
  (sum, transaction) => {
    let delta = 0;

    if (R.propEq('account', accId, transaction)) {
      delta = transaction.value;
    }
    return sum + delta;
  }, 0, R.values(transactions.byId),
);

export const getSum = R.pipe(
  R.map(R.prop('value')),
  R.sum,
);

export const transfersSum = (transfers, accId) => R.reduce((sum, transfer) => {
  let delta = 0;

  if (R.propEq('to', accId, transfer)) {
    delta = transfer.value;
  } else if (R.propEq('from', accId, transfer)) {
    delta = -transfer.value;
  }

  return sum + delta;
}, 0, R.values(transfers.byId));

export const getExpenses = categoriesById => R.filter(isExpense(categoriesById));

export const getIncomes = categoriesByIds => R.filter(isIncome(categoriesByIds));
