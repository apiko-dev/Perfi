import { connect } from 'react-redux';
import { createTransfer, updateAccount } from '../../../actions';
import TransferFormView from './TransferFormView';

const mapStateToProps = ({ accounts }) => ({ accounts });

export default connect(mapStateToProps, {
  createTransfer,
  updateAccount,
})(TransferFormView);
