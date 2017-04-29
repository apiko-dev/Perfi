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
  withHandlers({
    onChangeValue: ({ setValue }) => value => setValue(value),
    onUpdateNote: ({ updateNote }) => text => updateNote(text),
    onSetDate: ({ setDate, toggleDatePicker }) => (date) => {
      setDate(date);
      toggleDatePicker(false);
    },
    onToggleDatePicker: ({ toggleDatePicker, isDatePickerVisible }) => () => {
      toggleDatePicker(!isDatePickerVisible);
    },
    onSubmit: ({ submit, transaction, ...props }) => () => {
      const editedProps = R.pick(['value', 'category', 'date', 'note'], props);
      const propsToSubmit = transaction ? { _id: transaction._id, ...editedProps } : editedProps;

      submit(propsToSubmit);
    },
  }),
  defaultProps({
    value: 0,
    date: new Date(),
    isDatePickerVisible: false,
  }),
);

export default enhance(TransactionForm);
