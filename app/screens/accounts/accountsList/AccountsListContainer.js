import { connect } from 'react-redux';
import R from 'ramda';
import AccountsListView from './AccountsListView';
import { categoriesTypes } from '../../../constants/categories';

const isExpense = (transaction, categories) => R.propEq(
  'type', categoriesTypes.expense, categories.byId[transaction.category],
);

const transactionsSum = (transactions, categories, accId) => R.reduce((sum, transaction) => {
  let delta = 0;

  if (R.propEq('account', accId, transaction)) {
    delta = transaction.value * (isExpense(transaction, categories) ? -1 : 1);
  }

  return sum + delta;
}, 0, R.values(transactions.byId));

const transfersSum = (transfers, accId) => R.reduce((sum, transfer) => {
  let delta = 0;

  if (R.propEq('to', accId, transfer)) {
    delta = transfer.value;
  } else if (R.propEq('from', accId, transfer)) {
    delta = -transfer.value;
  }

  return sum + delta;
}, 0, R.values(transfers.byId));

const mapStateToProps = ({ accounts, categories, transactions, transfers }) => {
  const accountsById = accounts.byId;

  return {
    accounts: R.map(accId => ({
      ...accountsById[accId],
      balance: transfersSum(transfers, accId) + transactionsSum(transactions, categories, accId),
    }), accounts.ids),
  };
};

export default connect(mapStateToProps)(AccountsListView);
