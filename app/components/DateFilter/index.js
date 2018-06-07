import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
} from 'recompose';
import moment from 'moment';
import DateFilter from './DateFilter';

import {
  startOfDay,
  startOfYesterday,
  startOfCurrentWeek,
  startOfCurrentMonth,
  startOfCurrentYear,
  isYesterday,
  isToday,
} from '../../utils/dateHelpers';

const enhance = compose(
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
          period.from = startOfCurrentWeek;
          break;
        case '1':
          period.from = startOfCurrentMonth;
          break;
        case '2':
          period.from = startOfCurrentYear;
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
);

export default hoistStatics(enhance)(DateFilter);
