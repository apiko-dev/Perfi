import {
  compose,
  withState,
  hoistStatics,
  withHandlers,
} from 'recompose';
import moment from 'moment';
import { connect } from 'react-redux';
import TrendsScreenView from './TrendsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getTrendsStats } from '../../modules/transactions/selectors';
import { startOfCurrentMonth } from '../../utils/dateHelpers';

const mapStateToProps = (state, props) => ({
  stats: getTrendsStats(state, props),
});

const enhance = compose(
  withState(
    'dateForFiltering',
    'setDateForFiltering',
    { from: startOfCurrentMonth, to: moment().endOf('day') }
  ),
  withState('listRef', 'setListRef', null),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),

  withHandlers({
    onSetDateForFiltering: props => val => {
      setTimeout(() => props.listRef.scrollTo({ x: 0, y: 0, animated: true }));
      props.setDateForFiltering(val);
    },
  }),
  connect(mapStateToProps, transactionsOperations),
);

export default hoistStatics(enhance)(TrendsScreenView);
