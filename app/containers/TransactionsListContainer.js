import { connect } from 'react-redux';
import R from 'ramda';
import { TransactionsList } from '../components';

const filterByAccount = (accountId, transactions) =>
  R.filter(R.propEq('account', accountId), R.values(transactions.byId));

const groupByCategories = R.groupBy(R.prop('category'));

const handleTransactions = R.pipe(filterByAccount, groupByCategories);

const pickCategories = (transactionsMap, categories) =>
  R.pick(R.keys(transactionsMap), categories.byId);

const mapStateToProps = ({ accounts, categories, transactions }, { account }) => {
  const currentAccount = account || accounts.byId[0];
  const transactionsByCategories = handleTransactions(currentAccount.id, transactions);

  return {
    categories: pickCategories(transactionsByCategories, categories),
    transactionsByCategories,
  };
};

const TransactionsListContainer = connect(mapStateToProps)(TransactionsList);

export default TransactionsListContainer;
