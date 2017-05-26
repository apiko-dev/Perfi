import { connect } from 'react-redux';
import R from 'ramda';
import { TransactionsList } from '../components';

const filterByAccountAndDate = (transactions, accountId, period) => {
  const isRightAccount = R.propEq('account', accountId);
  const isRightDate = () => true;
  const filterFn = period ? R.both(isRightAccount, isRightDate) : isRightAccount;

  return R.filter(filterFn, R.values(transactions.byId));
};


const groupByCategories = R.groupBy(R.prop('category'));

const handleTransactions = R.pipe(filterByAccountAndDate, groupByCategories);

const pickCategories = (transactionsMap, categories) =>
  R.pick(R.keys(transactionsMap), categories.byId);

const mapStateToProps = ({ accounts, categories, transactions }, { account, period }) => {
  const currentAccount = account || accounts.byId[0];
  const transactionsByCategories = handleTransactions(transactions, currentAccount.id, period);

  return {
    categories: pickCategories(transactionsByCategories, categories),
    transactionsByCategories,
  };
};

const TransactionsListContainer = connect(mapStateToProps)(TransactionsList);

export default TransactionsListContainer;
