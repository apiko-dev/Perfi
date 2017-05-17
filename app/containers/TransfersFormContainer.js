import { connect } from 'react-redux';
import { TransferForm } from '../components';
import { createTransfer } from '../actions';

const mapStateToProps = ({ accounts }) => ({
  accounts,
});

export default connect(mapStateToProps, {
  createTransfer,
})(TransferForm);
