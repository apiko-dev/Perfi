import { connect } from 'react-redux';
import R from 'ramda';
import AccountsListView from './AccountsListView';

const mapStateToProps = ({ accounts }) => ({ accounts: R.values(accounts.byId) });

export default connect(mapStateToProps)(AccountsListView);
