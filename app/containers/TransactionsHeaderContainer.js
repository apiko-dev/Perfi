import { connect } from 'react-redux';
import R from 'ramda';
import { TransactionsHeader } from '../components';

const mapStateToProps = ({ accounts }) => ({ accounts: R.values(accounts.byId) });

export default connect(mapStateToProps)(TransactionsHeader);
