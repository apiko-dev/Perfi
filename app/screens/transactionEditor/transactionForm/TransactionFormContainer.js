import { connect } from 'react-redux';
import { transactionsOperations } from '../../../modules/transactions';
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

export default connect(mapStateToProps, transactionsOperations)(TransactionForm);
