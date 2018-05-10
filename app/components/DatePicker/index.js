import {
  compose,
  withState,
  withHandlers,
  defaultProps,
} from 'recompose';
import moment from 'moment';
import DatePicker from './DatePicker';
import { dimensions } from '../../styles';


const enhance = compose(
  defaultProps({
    mode: 'date',
    androidMode: 'default',
    format: 'LL',
    confirmBtnText: 'Confirm',
    cancelBtnText: 'Decline',
    icon: {
      name: 'calendar',
      size: dimensions.iconSize,
    },
  }),

  withState('displayedDate', 'setDisplayedDate', null),

  withHandlers({
    onSelectDate: props => (date) => {
      props.onSelectDate && props.onSelectDate(moment(date, 'LL'), date); // eslint-disable-line
      props.setDisplayedDate(date);
    },
  }),
);

export default enhance(DatePicker);
