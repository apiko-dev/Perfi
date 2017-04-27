import { defaultProps, compose, mapProps, withHandlers, withState } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda';
import { TransactionForm } from '../components';
import { createTransaction, updateTransaction } from '../actions';
import styles from '../styles/TransactionFormStyles';

const transactionProp = propName => R.path(['transaction', propName]);

const enhance = compose(
  connect(null, (dispatch, ownProps) => bindActionCreators({
    submit: ownProps.transaction ? updateTransaction : createTransaction,
  }, dispatch)),
  mapProps(props => ({
    ...props,
    style: {
      ...styles,
      ...props.style,
    },
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
