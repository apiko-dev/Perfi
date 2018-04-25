import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import Calendar from './Calendar';

const enhance = compose(

  withState('startDate', 'setStartDate', null),
  withState('endDate', 'setEndDate', null),


  withHandlers({
    onSelectDate: props => (date, type) => {
      if (type === 'END_DATE') {
        props.setEndDate(date);
      } else {
        props.setStartDate(date);
        props.setEndDate(null);
      }
    },

    onDonePress: props => () => {
      props.onToggleCalendar();

      props.onSelectedDate({
        from: props.startDate.startOf('day'),
        to: props.endDate ? props.endDate.endOf('day') : null,
      });
    },

  }),
);

export default enhance(Calendar);
