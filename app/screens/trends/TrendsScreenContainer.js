import { connect } from 'react-redux';
import TrendsScreen from './TrendsScreen';

const mapStateToProps = ({ transactions, categories }) => ({
  transactions: transactions.byId,
  categories: categories.byId,
});

export default connect(mapStateToProps)(TrendsScreen);
