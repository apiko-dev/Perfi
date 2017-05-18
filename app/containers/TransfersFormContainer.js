import { connect } from 'react-redux';
import { TransferForm } from '../components';
import { createTransfer, updateAccount } from '../actions';

const mapStateToProps = ({ accounts }) => ({
  accounts,
});

export default connect(mapStateToProps, {
  createTransfer,
  updateAccount,
})(TransferForm);
