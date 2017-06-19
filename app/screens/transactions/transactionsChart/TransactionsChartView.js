import { compose, withProps } from 'recompose';
import R from 'ramda';
import { isExpense, isIncome, groupByCategories } from '../../../utils/transactionsHelpers';
import TransactionsChart from './TransactionsChart';

const transactionsSum = R.pipe(
  R.map(R.prop('value')),
  R.sum,
);

const getExpensesTransactions = categoriesById => R.filter(isExpense(categoriesById));

const getIncomesTransactions = categoriesByIds => R.filter(isIncome(categoriesByIds));

const getChartItem = categoriesById => (transactions) => {
  const { name, icon } = categoriesById[transactions[0].category];
  const value = transactionsSum(transactions);

  return { name, icon, value };
};

const getChartData = categoriesById => R.pipe(
  groupByCategories,
  R.values,
  R.map(getChartItem(categoriesById)),
);

const enhance = compose(
  withProps(({ transactions, categoriesById }) => {
    const expensesTransactions = getExpensesTransactions(categoriesById)(transactions);
    const incomesTransactions = getIncomesTransactions(categoriesById)(transactions);
    const expenses = transactionsSum(expensesTransactions);
    const incomes = transactionsSum(incomesTransactions);

    return {
      chartData: getChartData(categoriesById)(expensesTransactions),
      balance: incomes - expenses,
      expenses,
      incomes,
    };
  }),
);

export default enhance(TransactionsChart);
