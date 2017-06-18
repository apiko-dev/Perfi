import { compose, withState, withProps, withHandlers } from 'recompose';
// import R from 'ramda';
import moment from 'moment';
import TrendsReport from './TrendsReport';

const onCloseDatePicker = ({ toggleDatePicker }) => () => {
  toggleDatePicker(false);
};

const onOpenDatePicker = ({ toggleDatePicker, setDateToChange }) => dateToChange => () => {
  setDateToChange(dateToChange);
  toggleDatePicker(true);
};

const onSetDate = ({ toggleDatePicker, dateToChange, setDateFrom, setDateTo }) => (date) => {
  const setDate = dateToChange === 'dateFrom' ? setDateFrom : setDateTo;
  setDate(date);
  toggleDatePicker(false);
};

const enhance = compose(
  withState('dateFrom', 'setDateFrom', new Date()),
  withState('dateTo', 'setDateTo', new Date()),
  withState('dateToChange', 'setDateToChange', 'dateFrom'),
  withState('isDatePickerVisible', 'toggleDatePicker', false),
  withHandlers({
    onCloseDatePicker,
    onOpenDatePicker,
    onSetDate,
  }),
);

export default enhance(TrendsReport);
