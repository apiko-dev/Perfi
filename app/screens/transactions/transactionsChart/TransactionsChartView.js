import { compose, withProps } from 'recompose';
import R from 'ramda';
import { isExpense, groupByCategories } from '../../../utils/transactionsHelpers';
import TransactionsChart from './TransactionsChart';

const getExpenses = categoriesById => R.pipe(
  R.filter(isExpense(categoriesById)),
  groupByCategories,
  R.values,
  R.map((trs) => {
    const { name, icon } = categoriesById[trs[0].category];
    const value = R.sum(R.map(R.prop('value'), trs));

    return { name, icon, value };
  }),
);

const enhance = compose(
  withProps(({ transactions, categoriesById }) => ({
    expenses: getExpenses(categoriesById)(transactions),
  })),
);

export default enhance(TransactionsChart);
