import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import moment from 'moment';
import { connect } from 'react-redux';
import TransactionsScreenView from './TransactionsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getTransactions } from '../../modules/transactions/selectors';
import { getTotalBalance } from '../../modules/accounts/selectors';

import {
  startOfDay,
  startOfYesterday,
  startOfWeek,
  startOfMonthAgo,
  startOfYear,
  isYesterday,
  isToday,
} from '../../utils/dateHelpers';


const mapStateToProps = (state, { dateForFiltering }) => ({
  transactions: getTransactions(state.transactions, dateForFiltering),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(mapStateToProps, transactionsOperations),

  withState('listRef', 'setListRef', null),

  withHandlers({
    onDeleteTransaction: props => (id) => {
      props.deleteTransaction(id);
    },
    onAddTransactionToFavourite: props => (id) => {
      props.addTransactionToFavourite(id);
    },
  }),

  lifecycle({
    componentWillMount() {
      this.props.navigation.setParams(
        {
          isChartShown: this.props.isChartShown,
          onToggleChart: this.props.onToggleChart,
        },
      );
    },
    componentDidUpdate(prevProps) {
      if (this.props.transactions !== prevProps.transactions) {
        setTimeout(() => this.props.listRef.scrollToOffset(0), 0);
      }
    },
  }),

);

export default hoistStatics(enhance)(TransactionsScreenView);
