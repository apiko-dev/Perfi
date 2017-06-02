import { connect } from 'react-redux';
import { deleteAccount } from '../../../actions';
import DeleteAccountButtonView from './DeleteAccountButtonView';

export default connect(null, { deleteAccount })(DeleteAccountButtonView);
