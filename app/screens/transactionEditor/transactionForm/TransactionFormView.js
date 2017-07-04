import { compose, withHandlers, withProps, withPropsOnChange, withState } from 'recompose';
import R from 'ramda';
import screens from '../../../constants/screens';
import TransactionForm from './TransactionForm';
import { withStyle } from '../../../utils/enhancers';
import styles from './TransactionFormStyles';

const transactionProp = (propName, def) => R.pathOr(def, ['transaction', propName]);

const requiredProps = ['value', 'account', 'category', 'date'];

const isFieldsFilled = R.pipe(
  R.props,
  R.none(R.isNil),
);

const withSubmitState = withPropsOnChange(
  requiredProps,
  props => ({ isReadyForSubmit: isFieldsFilled(requiredProps, props) }),
);

const onChangeValue = ({ setValue, toggleCalculator }) => (value) => {
  setValue(value);
  toggleCalculator(false);
};

const onChangeAccount = ({ navigation, setAccount }) => () => {
  navigation.navigate(screens.Accounts, {
    onSelectAccount: (account) => {
      setAccount(account);
      navigation.goBack(null);
    },
  });
};

const onChangeCategory = ({ navigation, setCategory, readyForSubmit }) => () => {
  navigation.navigate(screens.Categories, {
    onSelectCategory: (category) => {
      setCategory(category);
      navigation.goBack(null);
    },
  });
};

const onUpdateNote = ({ updateNote }) => (text) => {
  updateNote(text);
};

const onSetDate = ({ setDate, toggleDatePicker }) => (date) => {
  setDate(date);
  toggleDatePicker(false);
};

const onToggleDatePicker = ({ toggleDatePicker, isDatePickerVisible }) => () => {
  toggleDatePicker(!isDatePickerVisible);
};

const onToggleCalculator = ({ toggleCalculator, isCalculatorVisible }) => () => {
  toggleCalculator(!isCalculatorVisible);
};

const onSubmit = ({ submit, transaction, account, category, onClose, ...props }) => () => {
  const editedProps = {
    ...R.pick(['value', 'date', 'note'], props),
    account: account && account.id,
    category: category && category.id,
  };
  const propsToSubmit = transaction ? { id: transaction.id, ...editedProps } : editedProps;

  submit(propsToSubmit);
  onClose();
};

const enhance = compose(
  withStyle(styles),
  withProps(({ transaction, createTransaction, updateTransaction }) => ({
    submit: transaction ? updateTransaction : createTransaction,
  })),
  withState('value', 'setValue', transactionProp('value', 0)),
  withState('account', 'setAccount', transactionProp('account')),
  withState('category', 'setCategory', transactionProp('category')),
  withState('note', 'updateNote', transactionProp('note')),
  withState('date', 'setDate', transactionProp('date', new Date())),
  withState('isDatePickerVisible', 'toggleDatePicker', false),
  withState('isCalculatorVisible', 'toggleCalculator', false),
  withSubmitState,
  withHandlers({
    onChangeValue,
    onChangeAccount,
    onChangeCategory,
    onUpdateNote,
    onSetDate,
    onToggleDatePicker,
    onToggleCalculator,
    onSubmit,
  }),
);

export default enhance(TransactionForm);
