import { connect } from 'react-redux';
import { createAccount, updateAccount } from '../../../actions';
import AccountFormView from './AccountFormView';

export default connect(null, { createAccount, updateAccount })(AccountFormView);
