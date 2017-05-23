import { compose, withState, withProps, withHandlers } from 'recompose';
import R from 'ramda';
import moment from 'moment';
import formStyles from '../../styles/FormStyles';
import TrendsForm from './TrendsForm';
import { withStyle } from '../../utils/enhancers';
import sceneStyles from '../../styles/SceneStyles';

const { rowStyle, blockStyle } = formStyles;
const { rootStyle } = sceneStyles;

const getDateFrom = date => new Date(moment(date).set({
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
}));
const getDateTo = date => new Date(moment(date).set({
  hour: 24,
  minute: 0,
  second: 0,
  millisecond: 0,
}));

const enhance = compose(
  withStyle({ rootStyle, rowStyle, blockStyle }),
  withState('dateFrom', 'setDateFrom', getDateFrom(new Date())),
  withState('dateTo', 'setDateTo', getDateTo(new Date())),
  withState('isDateFromPickerVisible', 'setDateFromPickerState', false),
  withState('isDateToPickerVisible', 'setDateToPickerState', false),
  withProps(({ selectedAccount, transactions, categories, ...props }) => {
    const formattedTransactions = R.pipe(
      R.values,
      R.filter(({ date, account }) =>
        moment(date).isBetween(props.dateFrom, props.dateTo, null, '[]') &&
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

    return ({
      ...props,
      formattedTransactions,
    });
  }),
  withHandlers({
    onChangeDateFrom: ({ setDateFrom, setDateFromPickerState }) => (value) => {
      setDateFrom(getDateFrom(value));
      setDateFromPickerState(false);
    },
    onChangeDateTo: ({ setDateTo, setDateToPickerState }) => (value) => {
      setDateTo(getDateTo(value));
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
