import { connect } from 'react-redux';
import R from 'ramda';
import TransactionsListView from './TransactionsListView';
import { getTransactionsByCategories } from '../../../utils/transactionsHelpers';

const pickCategories = (transactionsMap, categories) => R.pick(
  R.keys(transactionsMap),
  categories.byId,
);

const mapStateToProps = (state, ownProps) => {
  const { accounts, categories, transactions } = state;
  const { account = accounts.byId[accounts.ids[0]], period } = ownProps;

  const transactionsByCategories = account
    ? getTransactionsByCategories(transactions, account.id, period)
    : null;

  return {
    categories: pickCategories(transactionsByCategories, categories),
    transactionsByCategories,
  };
};

export default connect(mapStateToProps)(TransactionsListView);
