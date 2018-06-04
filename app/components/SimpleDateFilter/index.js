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
  startOfYear,
  startOf10YearsAgo,

  isYesterday,
  isToday,
} from '../../utils/dateHelpers';

const enhance = compose(
  withState('isActiveCurrentMonth', 'setActiveCurrentMonth', false),
  withState('isActiveHalfYear', 'setActiveHalfYear', false),
  withState('isActiveAllTime', 'setActiveAllTime', false),
  withState('isActiveLast12', 'setActiveLast12', true),


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
      props.setActiveLast12(false);
      props.setActiveAllTime(false);

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
    onSetActiveLast12: props => () => {
      props.setActive('setActiveLast12');
      if (!props.isActiveLast12) {
        props.setDateForFiltering({ from: startOfYear, to: moment().endOf('day') });
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
