import {
  compose,
  withState,
  hoistStatics,
  withProps,
} from 'recompose';
import { connect } from 'react-redux';
import TrendsScreenView from './TrendsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import {
  getAccountsStats,
  getCategoriesStats,
  getTrendsStats,
} from '../../modules/transactions/selectors';
import {
  startOfDay,
  formatDateForPie, startOfYear,
} from '../../utils/dateHelpers';
import moment from 'moment/moment';

const mapStateToProps = (state, props) => ({
  dataForChart: getAccountsStats(state, props),
  dataForList: getCategoriesStats(state, props),
  stats: getTrendsStats(state, props),
});

const enhance = compose(
  // withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  withState('dateForFiltering', 'setDateForFiltering', { from: startOfYear, to: moment().endOf('day') }),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),
  connect(mapStateToProps, transactionsOperations),

  withProps(props => ({
    totalValue: props.dataForChart.reduce((accum, current) => accum + current.y, 0),
    date: formatDateForPie(props.dateForFiltering),
  })),
);

export default hoistStatics(enhance)(TrendsScreenView);
