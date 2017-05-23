import { compose, withState, withHandlers } from 'recompose';
import moment from 'moment';
import formStyles from '../../styles/FormStyles';
import TrendsForm from './TrendsForm';
import { withStyle } from '../../utils/enhancers';
import sceneStyles from '../../styles/SceneStyles';

const { rowStyle, blockStyle } = formStyles;
const { rootStyle } = sceneStyles;

const enhance = compose(
  withStyle({ rootStyle, rowStyle, blockStyle }),
  withState('dateFrom', 'setDateFrom', new Date(moment().set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  }))),
  withState('dateTo', 'setDateTo', new Date(moment().set({
    hour: 24,
    minute: 0,
    second: 0,
    millisecond: 0,
  }))),
  withState('isDateFromPickerVisible', 'setDateFromPickerState', false),
  withState('isDateToPickerVisible', 'setDateToPickerState', false),
  withHandlers({
    onChangeDateFrom: ({ setDateFrom, setDateFromPickerState }) => (value) => {
      setDateFrom(value);
      setDateFromPickerState(false);
    },
    onChangeDateTo: ({ setDateTo, setDateToPickerState }) => (value) => {
      setDateTo(value);
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
