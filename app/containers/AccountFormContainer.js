import { connect } from 'react-redux';
import AccountForm from '../components/accountForm/AccountForm';
import {
  createAccount,
  updateAccount,
  updateCurrency,
  updateAccountField,
  showModal,
  hideModal,
} from '../actions';

const mapStateToProps = ({ defaultCurrency, account }) => ({
  defaultCurrency,
  account,
});

export default connect(mapStateToProps, {
  createAccount,
  updateAccount,
  updateCurrency,
  updateAccountField,
  showModal,
  hideModal,
})(AccountForm);
