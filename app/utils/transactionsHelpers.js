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
      delta = transaction.value * (isExpense(categories.byId, transaction) ? -1 : 1);
    }

    return sum + delta;
  }, 0, R.values(transactions.byId),
);

export const getSum = R.pipe(
  R.map(R.prop('value')),
  R.sum,
);

export const getExpenses = categoriesById => R.filter(isExpense(categoriesById));

export const getIncomes = categoriesByIds => R.filter(isIncome(categoriesByIds));
