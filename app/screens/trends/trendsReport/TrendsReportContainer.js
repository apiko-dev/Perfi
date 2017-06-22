import { connect } from 'react-redux';
import TrendsReportView from './TrendsReportView';

const mapStateToProps = ({ transactions, categories }) => ({
  transactions: transactions.byId,
  categories: categories.byId,
});

export default connect(mapStateToProps)(TrendsReportView);
