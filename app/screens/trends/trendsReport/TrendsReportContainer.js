import { connect } from 'react-redux';
import TrendsReportView from './TrendsReportView';

const mapStateToProps = ({ transactions, categories }) => ({
  transactions: transactions.byId ? transactions.byId : undefined,
  categories: categories.byId,
});

export default connect(mapStateToProps)(TrendsReportView);
