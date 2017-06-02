import { connect } from 'react-redux';
import { createTransaction, updateTransaction } from '../../../actions';
import { getParam } from '../../../utils/navHelpers';
import TransactionForm from './TransactionFormView';

const mapStateToProps = ({ accounts, categories }, { navigation }) => {
  const transaction = getParam('transaction')(navigation);

  return transaction ? {
    transaction: {
      ...transaction,
      account: accounts.byId[transaction.account],
      category: categories.byId[transaction.category],
    },
  } : {};
};

export default connect(mapStateToProps, {
  createTransaction,
  updateTransaction,
})(TransactionForm);
