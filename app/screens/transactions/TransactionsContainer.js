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

const mapStateToProps = ({ accounts, transactions }, { dateForFiltering }) => ({
  totalBalance: getTotalBalance(accounts),
  transactions: getTransactions(transactions, dateForFiltering),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(mapStateToProps, transactionsOperations),

  withState('isActiveSelector', 'setActiveSelector', false),
  withState('isActiveToday', 'setActiveToday', true),
  withState('isActiveYesterday', 'setActiveYesterday', false),
  withState('isActiveCalendar', 'setActiveCalendar', false),
  withState('isVisibleCalendar', 'toggleCalendar', false),

  withState('isChartShown', 'setChartShow', false),

  withState('listRef', 'setListRef', null),

  withHandlers({
    setActive: props => (item) => {
      props.setActiveToday(false);
      props.setActiveYesterday(false);
      props.setActiveSelector(false);
      props.setActiveCalendar(false);
      props[item](true);
    },
  }),

  withHandlers({
    onDeleteTransaction: props => (id) => {
      props.deleteTransaction(id);
    },
    onAddTransactionToFavourite: props => (id) => {
      props.addTransactionToFavourite(id);
    },

    onToggleCalendar: props => () => {
      props.toggleCalendar(!props.isVisibleCalendar);
    },
    onChangeCalendar: ({ setActive, setDateForFiltering }) => (date) => {
      if (!date.from && !date.to) return;

      setActive('setActiveCalendar');
      if (!date.to) {
        if (isToday(date.from)) setActive('setActiveToday');
        else if (isYesterday(date.from)) setActive('setActiveYesterday');
      }
      setDateForFiltering(date.to ? date : date.from);
    },

    onChangeSelector: props => (res) => {
      props.setActive('setActiveSelector');
      const period = { from: null, to: moment().endOf('day') };

      switch (res) {
        case '0':
          period.from = startOfWeek;
          break;
        case '1':
          period.from = startOfMonthAgo;
          break;
        case '2':
          period.from = startOfYear;
          break;
        default:
          break;
      }

      props.setDateForFiltering(period);
    },

    onSetActiveToday: props => () => {
      props.setActive('setActiveToday');
      if (!props.isActiveToday) props.setDateForFiltering(startOfDay);
    },

    onSetActiveYesterday: props => () => {
      props.setActive('setActiveYesterday');
      if (!props.isActiveYesterday) props.setDateForFiltering(startOfYesterday);
    },

    onToggleChart: props => () => {
      props.setChartShow(!props.isChartShown);
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
