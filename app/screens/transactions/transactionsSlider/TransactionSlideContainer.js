import { connect } from 'react-redux';
import R from 'ramda';
import { getPeriod } from '../../../utils/dateHelpers';
import { filterByAccountAndDate } from '../../../utils/transactionsHelpers';
import TransactionsSlide from './TransactionsSlide';

const mapStateToProps = (state, ownProps) => {
  const { accounts, categories, transactions } = state;
  const { account = accounts.byId[accounts.ids[0]], index, interval } = ownProps;
  const period = getPeriod(index, interval);

  const currentTransactions = account
    ? filterByAccountAndDate(transactions, account.id, period)
    : [];

  const currentCategoriesIds = R.uniq(R.map(R.prop('category'), currentTransactions));

  const currentCategories = R.values(R.pick(currentCategoriesIds, categories.byId));

  return {
    account,
    period,
    transactions: currentTransactions,
    categories: currentCategories,
  };
};

export default connect(mapStateToProps)(TransactionsSlide);
