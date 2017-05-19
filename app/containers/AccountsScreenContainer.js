import { connect } from 'react-redux';
import Accounts from '../screens/Accounts';
import { deleteAccount, createAccount, updateAccount } from '../actions/accountsActions';

const mapStateToProps = ({ accounts }) => ({
  accounts,
});

export default connect(mapStateToProps, {
  deleteAccount,
  createAccount,
  updateAccount,
})(Accounts);
