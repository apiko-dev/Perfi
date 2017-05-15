import { connect } from 'react-redux';
import { TransactionsList } from '../components';

const mapStateToProps = ({ transactions }) => ({ transactions: transactions.byId });

const TransactionsListContainer = connect(mapStateToProps)(TransactionsList);

export default TransactionsListContainer;
