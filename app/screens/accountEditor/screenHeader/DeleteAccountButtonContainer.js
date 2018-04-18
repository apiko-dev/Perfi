import { connect } from 'react-redux';
import { accountsOperations } from '../../../modules/accounts';
import DeleteAccountButtonView from './DeleteAccountButtonView';

export default connect(null, accountsOperations)(DeleteAccountButtonView);
