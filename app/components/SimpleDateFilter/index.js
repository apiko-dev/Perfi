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
} from '../../utils/dateHelpers';

const enhance = compose(
  withState('isActiveCurrentMonth', 'setActiveCurrentMonth', true),
  withState('isActiveHalfYear', 'setActiveHalfYear', false),
  withState('isActiveAllTime', 'setActiveAllTime', false),
  withState('isActiveLast12', 'setActiveLast12', false),


  withHandlers({
    setActive: props => (item) => {
      props.setActiveCurrentMonth(false);
      props.setActiveHalfYear(false);
      props.setActiveLast12(false);
      props.setActiveAllTime(false);

      props[item](true);
    },
  }),

  withHandlers({
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
  }),
);

export default hoistStatics(enhance)(SimpleDateFilter);
