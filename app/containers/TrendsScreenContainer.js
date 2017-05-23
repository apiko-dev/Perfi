import { connect } from 'react-redux';
import { Trends } from '../screens';

const mapStateToProps = ({ transactions: { byId } }) => ({
  transactions: byId,
});

export default connect(mapStateToProps)(Trends);
