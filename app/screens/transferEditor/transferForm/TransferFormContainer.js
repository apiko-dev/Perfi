import { connect } from 'react-redux';
import R from 'ramda';
import { transfersOperations } from '../../../modules/transfers';
import TransferFormView from './TransferFormView';

const mapStateToProps = ({ accounts }) => ({ accounts: R.values(accounts.byId) });

export default connect(mapStateToProps, transfersOperations)(TransferFormView);
