import { compose, withState, withProps, withHandlers } from 'recompose';
// import R from 'ramda';
import moment from 'moment';
import TrendsReport from './TrendsReport';

const getDate = date => new Date(moment(date).set({
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
}));

const enhance = compose(
  withState('dateFrom', 'setDateFrom', getDate(new Date())),
  withState('dateTo', 'setDateTo', getDate(new Date())),
  withState('isDateFromPickerVisible', 'setDateFromPickerState', false),
  withState('isDateToPickerVisible', 'setDateToPickerState', false),
  withHandlers({}),
);

export default enhance(TrendsReport);
