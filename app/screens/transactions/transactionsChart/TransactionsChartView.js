import { compose, withProps } from 'recompose';
import TransactionsChart from './TransactionsChart';

const enhace = compose(
  withProps(({ account, period }) => ({
    expensesMap: {},
  })),
);

export default enhace(TransactionsChart);