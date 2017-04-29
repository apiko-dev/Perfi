import { connect } from 'react-redux';
import { TransactionForm } from '../components';
import { createTransaction, updateTransaction } from '../actions';

export default connect(null, {
  createTransaction,
  updateTransaction,
})(TransactionForm);
