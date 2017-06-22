import { compose, withState, withProps, withHandlers } from 'recompose';
import R from 'ramda';
import moment from 'moment';
import TrendsReport from './TrendsReport';
import { categoriesTypes as types } from '../../../constants/categories';
import { inDateRange, getExpenses, getIncomes, getSum } from '../../../utils/transactionsHelpers';

const startOfMonth = (d = new Date()) => moment(d).startOf('month').toDate();

const startOfNextMonth = (d = new Date()) => startOfMonth(moment(d).add(1, 'months').toDate());

const endOfMonth = (d = new Date()) => moment(d).endOf('month').toDate();

const formatMonth = d => moment(d).format('MM/YY');

// eslint-disable-next-line
const getMonths = (from, to, months) => from.getTime() <= to.getTime()
    ? getMonths(startOfNextMonth(from), to, [...months, from])
    : months;

const withMonths = withProps(({ dateFrom, dateTo }) => ({
  months: getMonths(dateFrom, dateTo, []),
}));

const withLabels = withProps(({ months }) => ({
  labels: R.map(formatMonth, months),
}));

const withTotals = withProps(({ months, transactions, categories }) => {
  const totals = R.map((month) => {
    const period = { from: month, to: endOfMonth(month) };
    const trs = R.filter(inDateRange(period), transactions);
    const expense = R.values(getExpenses(categories)(trs));
    const income = R.values(getIncomes(categories)(trs));

    return {
      [types.expense]: getSum(expense),
      [types.income]: getSum(income),
    };
  }, months);

  return { totals };
});

const withChartData = withProps(({ totals }) => ({
  chartData: R.reduce((acc, val) => [
    [...acc[0], { value: val[types.income] }],
    [...acc[1], { value: val[types.expense] }],
  ], [[], []], totals),
}));

const onCloseDatePicker = ({ toggleDatePicker }) => () => {
  toggleDatePicker(false);
};

const onOpenDatePicker = ({ toggleDatePicker, setDateToChange }) => dateToChange => () => {
  setDateToChange(dateToChange);
  toggleDatePicker(true);
};

const onSetDate = ({ toggleDatePicker, dateToChange, setDateFrom, setDateTo }) => (date) => {
  const setDate = dateToChange === 'dateFrom' ? setDateFrom : setDateTo;
  setDate(moment(date).startOf('month').toDate());
  toggleDatePicker(false);
};

const enhance = compose(
  withState('dateFrom', 'setDateFrom', startOfMonth()),
  withState('dateTo', 'setDateTo', startOfNextMonth()),
  withState('dateToChange', 'setDateToChange', 'dateFrom'),
  withState('isDatePickerVisible', 'toggleDatePicker', false),
  withMonths,
  withLabels,
  withTotals,
  withChartData,
  withHandlers({
    onCloseDatePicker,
    onOpenDatePicker,
    onSetDate,
  }),
);

export default enhance(TrendsReport);
