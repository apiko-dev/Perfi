import { connect } from 'react-redux';
import { TransferForm } from '../components';
import { createTransfer, performTransfer } from '../actions';

const mapStateToProps = ({ accounts }) => ({
  accounts,
});

export default connect(mapStateToProps, {
  createTransfer,
  performTransfer,
})(TransferForm);
