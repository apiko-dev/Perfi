import { defaultProps, compose, mapProps, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { TransactionForm } from '../components';
import { createTransaction } from '../actions';
import styles from '../styles/TransactionFormStyles';

const enhance = compose(
  connect(null, { create: createTransaction }),
  mapProps(props => ({
    ...props,
    style: {
      ...styles,
      ...props.style,
    },
  })),
  withState('value', 'setValue'),
  withState('category', 'setCategory'),
  withState('note', 'updateNote'),
  withState('date', 'setDate'),
  withState('isDatePickerVisible', 'toggleDatePicker'),
  withHandlers({
    onChangeValue: ({ setValue }) => (value) => {
      setValue(value);
    },
    onUpdateNote: ({ updateNote }) => (text) => {
      updateNote(text);
    },
    onSetDate: ({ setDate, toggleDatePicker }) => (date) => {
      setDate(date);
      toggleDatePicker(false);
    },
    onToggleDatePicker: ({ toggleDatePicker, isDatePickerVisible }) => () => {
      toggleDatePicker(!isDatePickerVisible);
    },
    onSubmit: ({ value, category, date, note, create }) => () => {
      create({
        value,
        category: category || 'test category id',
        date,
        note,
      });
    },
  }),
  defaultProps({
    value: '0',
    date: new Date(),
    isDatePickerVisible: false,
  }),
);

export default enhance(TransactionForm);
