import {
  compose,
  withState,
  hoistStatics,
} from 'recompose';
import moment from 'moment';
import { connect } from 'react-redux';
import TrendsScreenView from './TrendsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getTrendsStats } from '../../modules/transactions/selectors';
import { startOfYear } from '../../utils/dateHelpers';

const mapStateToProps = (state, props) => ({
  stats: getTrendsStats(state, props),
});

const enhance = compose(
  withState(
    'dateForFiltering',
    'setDateForFiltering',
    { from: startOfYear, to: moment().endOf('day') }
  ),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),
  connect(mapStateToProps, transactionsOperations),
);

export default hoistStatics(enhance)(TrendsScreenView);
