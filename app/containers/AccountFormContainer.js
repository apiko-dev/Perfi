import { connect } from 'react-redux';
import { AccountForm } from '../components';
import {
  createAccount,
  updateAccount,
} from '../actions';

export default connect(null, {
  createAccount,
  updateAccount,
})(AccountForm);
