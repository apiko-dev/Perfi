import { connect } from 'react-redux';
import R from 'ramda';
import { TransactionsList } from '../components';

const isRightAccount = accountId => R.propEq('account', accountId);

const inDateRange = period => ({ date }) => R.and(
  R.gte(date.getTime(), period.from.getTime()),
  R.lt(date.getTime(), period.to.getTime()),
);

const filterByAccountAndDate = (transactions, accountId, period) => {
  const check = period
    ? R.both(isRightAccount(accountId), inDateRange(period))
    : isRightAccount(accountId);

  return R.filter(check, R.values(transactions.byId));
};

const groupByCategories = R.groupBy(R.prop('category'));

const groupAndFilter = R.pipe(filterByAccountAndDate, groupByCategories);

const pickCategories = (transactionsMap, categories) => R.pick(
  R.keys(transactionsMap),
  categories.byId
);

const mapStateToProps = (state, ownProps) => {
  const { accounts, categories, transactions } = state;
  const { account = accounts.byId[0], period } = ownProps;

  const transactionsByCategories = groupAndFilter(transactions, account.id, period);

  return {
    categories: pickCategories(transactionsByCategories, categories),
    transactionsByCategories,
  };
};

const TransactionsListContainer = connect(mapStateToProps)(TransactionsList);

export default TransactionsListContainer;
