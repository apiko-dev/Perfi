import { connect } from 'react-redux';
import { deleteAccount } from '../actions';
import DeleteAccountButton from '../components/navButtons/DeleteAccountButton';

export default connect(null, {
  deleteAccount,
})(DeleteAccountButton);
