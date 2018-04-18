import { connect } from 'react-redux';
import { accountsOperations } from '../../../modules/accounts';
import AccountFormView from './AccountFormView';

export default connect(null, accountsOperations)(AccountFormView);
