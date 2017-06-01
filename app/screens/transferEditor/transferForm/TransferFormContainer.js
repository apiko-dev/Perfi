import { connect } from 'react-redux';
import R from 'ramda';
import { createTransfer } from '../../../actions';
import TransferFormView from './TransferFormView';

const mapStateToProps = ({ accounts }) => ({ accounts: R.values(accounts.byId) });

export default connect(mapStateToProps, { createTransfer })(TransferFormView);
