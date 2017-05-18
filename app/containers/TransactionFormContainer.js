import { connect } from 'react-redux';
import { TransactionForm } from '../components';
import { createTransaction, updateTransaction } from '../actions';

const mapStateToProps = ({ accounts, categories }, { transaction }) => (
  transaction ? {
    transaction: {
      ...transaction,
      account: accounts.byId[transaction.account],
      category: categories.byId[transaction.category],
    },
  } : {}
);

export default connect(mapStateToProps, {
  createTransaction,
  updateTransaction,
})(TransactionForm);
