import { connect } from 'react-redux';
import R from 'ramda';
import TransactionsHeaderView from './TransactionsHeaderView';

const mapStateToProps = ({ accounts }) => ({ accounts: R.values(accounts.byId) });

export default connect(mapStateToProps)(TransactionsHeaderView);
