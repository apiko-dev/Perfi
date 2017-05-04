import { connect } from 'react-redux';
import Accounts from '../screens/Accounts';

const mapStateToProps = ({ accounts }) => ({
  accounts,
});

export default connect(mapStateToProps)(Accounts);
