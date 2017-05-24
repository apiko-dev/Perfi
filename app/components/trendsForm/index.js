import { compose, withState, withProps, withHandlers } from 'recompose';
import R from 'ramda';
import moment from 'moment';
import formStyles from '../../styles/FormStyles';
import TrendsForm from './TrendsForm';
import { withStyle } from '../../utils/enhancers';
import sceneStyles from '../../styles/SceneStyles';
import { categoriesTypes } from '../../constants/categories';

const { rowStyle, blockStyle } = formStyles;
const { rootStyle } = sceneStyles;

const getDate = date => new Date(moment(date).set({
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
}));

const average = R.converge(R.divide, [R.sum, R.length]);

const enhance = compose(
  withStyle({ rootStyle, rowStyle, blockStyle }),
  withState('dateFrom', 'setDateFrom', getDate(new Date())),
  withState('dateTo', 'setDateTo', getDate(new Date())),
  withState('isDateFromPickerVisible', 'setDateFromPickerState', false),
  withState('isDateToPickerVisible', 'setDateToPickerState', false),
  withProps(({ selectedAccount, transactions, categories, ...props }) => {
    const formattedTransactions = R.pipe(
      R.values,
      R.filter(({ date, account }) =>
        moment(getDate(date)).isBetween(props.dateFrom, props.dateTo, null, '[]') &&
        account === (selectedAccount && selectedAccount.id)),
      R.groupBy(({ date }) => moment(date).format('MMMM')),
      R.mapObjIndexed(item => R.pipe(
        R.groupBy(
          ({ category }) => categories[category].type,
        ),
        R.mapObjIndexed(list => ({
          items: list,
          total: R.reduce((sum, { value }) => sum + +value, 0, list),
        })),
      )(item),
    ))(transactions);

    const totals = R.reduce(
      (sum, { [categoriesTypes.income]: income, [categoriesTypes.expense]: expense }) => ({
        income: [...sum.income, income ? income.total : 0],
        expense: [...sum.expense, expense ? expense.total : 0],
      }), {
        income: [],
        expense: [],
      },
      R.values(formattedTransactions),
    );

    return ({
      ...props,
      formattedTransactions: {
        byMonth: formattedTransactions,
        average: {
          income: average(totals.income) || 0,
          expense: average(totals.expense) || 0,
        },
      },
    });
  }),
  withHandlers({
    onChangeDateFrom: ({ setDateFrom, setDateFromPickerState }) => (value) => {
      setDateFrom(getDate(value));
      setDateFromPickerState(false);
    },
    onChangeDateTo: ({ setDateTo, setDateToPickerState }) => (value) => {
      setDateTo(getDate(value));
      setDateToPickerState(false);
    },
    toggleDateFromPicker: ({ isDateFromPickerVisible, setDateFromPickerState }) => () => {
      setDateFromPickerState(!isDateFromPickerVisible);
    },
    toggleDateToPicker: ({ isDateToPickerVisible, setDateToPickerState }) => () => {
      setDateToPickerState(!isDateToPickerVisible);
    },
  }),
);

export default enhance(TrendsForm);
