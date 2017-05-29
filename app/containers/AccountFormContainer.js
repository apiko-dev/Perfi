import { connect } from 'react-redux';
import { createAccount, updateAccount } from '../actions';
import { AccountForm } from '../components';

export default connect(null, { createAccount, updateAccount })(AccountForm);
