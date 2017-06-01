import { connect } from 'react-redux';
import R from 'ramda';
import TransactionsListView from './TransactionsListView';

const isRightAccount = accountId => R.propEq('account', accountId);

const inDateRange = period => ({ date }) => {
  const dt = new Date(date);

  return R.and(
    R.gte(dt.getTime(), period.from.getTime()),
    R.lt(dt.getTime(), period.to.getTime()),
  );
};

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
  categories.byId,
);

const mapStateToProps = (state, ownProps) => {
  const { accounts, categories, transactions } = state;
  const { account = accounts.byId[accounts.ids[0]], period } = ownProps;

  const transactionsByCategories = account
    ? groupAndFilter(transactions, account.id, period)
    : null;

  return {
    categories: pickCategories(transactionsByCategories, categories),
    transactionsByCategories,
  };
};

export default connect(mapStateToProps)(TransactionsListView);
