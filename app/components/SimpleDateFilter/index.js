import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
} from 'recompose';
import moment from 'moment';
import SimpleDateFilter from './SimpleDateFilter';

import {
  startOfCurrentMonth,
  startOfHalfYearAgo,
  startOf10YearsAgo,

  startOfWeek,
  startOfMonthAgo,
  startOfYear,
  isYesterday,
  isToday,
} from '../../utils/dateHelpers';

const enhance = compose(
  withState('isActiveCurrentMonth', 'setActiveCurrentMonth', false),
  withState('isActiveHalfYear', 'setActiveHalfYear', false),
  withState('isActiveAllTime', 'setActiveAllTime', false),


  withState('isActiveSelector', 'setActiveSelector', false),
  withState('isActiveWeek', 'setActiveWeek', true),
  withState('isActiveCalendar', 'setActiveCalendar', false),
  withState('isVisibleCalendar', 'toggleCalendar', false),

  withState('isChartShown', 'setChartShow', false),

  withState('listRef', 'setListRef', null),

  withHandlers({
    setActive: props => (item) => {
      props.setActiveCurrentMonth(false);
      props.setActiveHalfYear(false);
      props.setActiveAllTime(false);


      // props.setActiveSelector(false);
      // props.setActiveCalendar(false);
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

    onSetActiveCurrentMonth: props => () => {
      props.setActive('setActiveCurrentMonth');
      if (!props.isActiveCurrentMonth) {
        props.setDateForFiltering({ from: startOfCurrentMonth, to: moment().endOf('day') });
      }
    },
    onSetActiveHalfYear: props => () => {
      props.setActive('setActiveHalfYear');
      if (!props.isActiveHalfYear) {
        props.setDateForFiltering({ from: startOfHalfYearAgo, to: moment().endOf('day') });
      }
    },

    onSetActiveAllTime: props => () => {
      props.setActive('setActiveAllTime');
      if (!props.isActiveAllTime) {
        props.setDateForFiltering({ from: startOf10YearsAgo, to: moment().endOf('day') });
      }
    },

    onToggleChart: props => () => {
      props.setChartShow(!props.isChartShown);
    },
  }),
);

export default hoistStatics(enhance)(SimpleDateFilter);
