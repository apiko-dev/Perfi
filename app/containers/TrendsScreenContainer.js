import { connect } from 'react-redux';
import { Trends } from '../screens';

const mapStateToProps = ({ transactions, categories }) => ({
  transactions: transactions.byId,
  categories: categories.byId,
});

export default connect(mapStateToProps)(Trends);
