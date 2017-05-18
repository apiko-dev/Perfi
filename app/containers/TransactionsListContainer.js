import { connect } from 'react-redux';
import R from 'ramda';
import { TransactionsList } from '../components';

const groupByCategories = R.pipe(
  R.values,
  R.groupBy(R.prop('category')),
);

const mapStateToProps = ({ categories, transactions }) => {
  const transactionsByCategories = groupByCategories(transactions.byId);
  const categoriesIds = R.keys(transactionsByCategories);

  return {
    categories: R.pick(categoriesIds, categories.byId),
    transactionsByCategories,
  };
};

const TransactionsListContainer = connect(mapStateToProps)(TransactionsList);

export default TransactionsListContainer;
