import { compose, withHandlers, withProps, withState } from 'recompose';
import R from 'ramda';
import screens from '../../constants/screens';
import TransactionForm from './TransactionForm';
import { withStyle } from '../../utils/enhancers';
import styles from '../../styles/TransactionFormStyles';

const transactionProp = (propName, def) => R.pathOr(def, ['transaction', propName]);

const isFieldsFilled = R.pipe(
  R.props,
  R.none(R.isNil),
);

const enhance = compose(
  withStyle(styles),
  withProps(({ transaction, createTransaction, updateTransaction }) => ({
    submit: transaction ? updateTransaction : createTransaction,
  })),
  withProps(props => ({ isReadyForSubmit: isFieldsFilled(props) })),
  withState('value', 'setValue', transactionProp('value', 0)),
  withState('account', 'setAccount', transactionProp('account')),
  withState('category', 'setCategory', transactionProp('category')),
  withState('note', 'updateNote', transactionProp('note')),
  withState('date', 'setDate', transactionProp('date', new Date())),
  withState('isDatePickerVisible', 'toggleDatePicker', false),
  withState('isCalculatorVisible', 'toggleCalculator', false),
  withState('isReadyForSubmit', 'readyForSubmit', isFieldsFilled(['value', 'category', 'date'])),
  withHandlers({
    onChangeValue: ({ setValue, toggleCalculator }) => (value) => {
      setValue(value);
      toggleCalculator(false);
    },
    onChangeAccount: ({ navigation, setAccount }) => () => {
      navigation.navigate(screens.Accounts, {
        onSelectAccount: (account) => {
          setAccount(account);
          navigation.goBack(null);
        },
      });
    },
    onChangeCategory: ({ navigation, setCategory, readyForSubmit }) => () => {
      navigation.navigate(screens.Categories, {
        onSelectCategory: (category) => {
          setCategory(category);
          readyForSubmit(true);
          navigation.goBack(null);
        },
      });
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
    onSubmit: ({ submit, transaction, account, category, onClose, ...props }) => () => {
      const editedProps = {
        ...R.pick(['value', 'date', 'note'], props),
        account: account && account.id,
        category: category && category.id,
      };
      const propsToSubmit = transaction ? { id: transaction.id, ...editedProps } : editedProps;

      submit(propsToSubmit);
      onClose();
    },
  }),
);

export default enhance(TransactionForm);
