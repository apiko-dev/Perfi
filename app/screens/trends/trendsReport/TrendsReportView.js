import { compose, withState, withProps, withPropsOnChange, withHandlers } from 'recompose';
import R from 'ramda';
import moment from 'moment';
import TrendsReport from './TrendsReport';
import { categoriesTypes as types } from '../../../constants/categories';
import { inDateRange, getExpenses, getIncomes, getSum } from '../../../utils/transactionsHelpers';
import {
  addDays,
  endOfMonth,
  startOfMonth,
  startOfNextMonth,
  getMonths,
  formatMonth,
} from '../../../utils/dateHelpers';

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

const average = arr => R.divide(
  R.sum(R.map(R.prop('value'), arr)),
  R.length(arr),
);

const round = x => Math.round(x * 100) / 100;

const withAverageData = withProps(({ chartData }) => ({
  averageIncome: round(average(chartData[0])),
  averageExpense: round(average(chartData[1])),
}));

const withDateLimits = withPropsOnChange(
  ['dateToChange'],
  ({ dateToChange, dateFrom, dateTo }) => ({
    minDate: dateToChange === 'dateFrom' ? undefined : addDays(dateFrom, 1),
    maxDate: dateToChange === 'dateTo' ? undefined : addDays(dateTo, -1),
  }),
);

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
  withAverageData,
  withDateLimits,
  withHandlers({
    onCloseDatePicker,
    onOpenDatePicker,
    onSetDate,
  }),
);

export default enhance(TrendsReport);
