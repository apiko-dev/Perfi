import { connect } from 'react-redux';
import R from 'ramda';
import AccountsListView from './AccountsListView';
import { accountTransactionsSum as transactionsSum } from '../../../utils/transactionsHelpers';

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
