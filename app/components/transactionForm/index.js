import { defaultProps, compose, mapProps, withHandlers, withProps, withState } from 'recompose';
import R from 'ramda';
import TransactionForm from './TransactionForm';
import styles from '../../styles/TransactionFormStyles';

const transactionProp = propName => R.path(['transaction', propName]);

const enhance = compose(
  mapProps(props => ({
    ...props,
    style: {
      ...styles,
      ...props.style,
    },
  })),
  withProps(({ transaction, createTransaction, updateTransaction }) => ({
    submit: transaction ? updateTransaction : createTransaction,
  })),
  withState('value', 'setValue', transactionProp('value')),
  withState('category', 'setCategory', transactionProp('category')),
  withState('note', 'updateNote', transactionProp('note')),
  withState('date', 'setDate', transactionProp('date')),
  withState('isDatePickerVisible', 'toggleDatePicker'),
  withState('isCalculatorVisible', 'toggleCalculator'),
  withHandlers({
    onChangeValue: ({ setValue, toggleCalculator }) => (value) => {
      setValue(value);
      toggleCalculator(false);
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
    onToggleCalculator: ({ toggleCalculator, isCalculatorVisible }) => () => {
      toggleCalculator(!isCalculatorVisible);
    },
    onSubmit: ({ submit, transaction, onClose, ...props }) => () => {
      const editedProps = R.pick(['value', 'category', 'date', 'note'], props);
      const propsToSubmit = transaction ? { _id: transaction._id, ...editedProps } : editedProps;

      submit(propsToSubmit);
      onClose();
    },
  }),
  defaultProps({
    value: 0,
    date: new Date(),
    isDatePickerVisible: false,
    isCalculatorVisible: false,
  }),
);

export default enhance(TransactionForm);
