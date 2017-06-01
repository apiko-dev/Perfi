import { compose, withHandlers, withState, withProps } from 'recompose';
import R from 'ramda';
import AccountForm from './AccountForm';
import styles from '../../../styles/FormStyles';
import icons from '../../../constants/accountIcons';
import transactionFormStyle from
  '../../../screens/transactionEditor/transactionForm/TransactionFormStyles';
import buttonsStyles from '../../../styles/ButtonsStyles';
import inputStyles from '../../../styles/FormInputWithIconStyles';
import currencies from '../../../constants/currencies';
import { withStyle } from '../../../utils/enhancers';
import { getParam } from '../../../utils/navHelpers';

const { calculatorModalStyle } = transactionFormStyle;
const { fixedButtonContainer } = buttonsStyles;
const { iconStyle } = inputStyles;

const accountProp = (propName, def) => R.pathOr(def, ['account', propName]);

const withAccount = withProps(({ navigation }) => ({
  account: getParam('account')(navigation),
}));

const withValidation = withProps(({ name }) => ({
  isValid: name && name.length > 0,
}));

const withSubmitEvent = withProps(({ account, createAccount, updateAccount }) => ({
  submit: account ? updateAccount : createAccount,
}));

const onDateChange = ({ setDate, setDatePickerState }) => (date) => {
  setDate(date);
  setDatePickerState(false);
};

const onTogglePicker = ({ toggleIconPicker, isPickerVisible }) => () => {
  toggleIconPicker(!isPickerVisible);
};

const onIconChange = ({ setIcon, toggleIconPicker }) => (value) => {
  toggleIconPicker(false);
  setIcon(value);
};

const onToggleDatePicker = ({ isDatePickerVisible, setDatePickerState }) => () => {
  setDatePickerState(!isDatePickerVisible);
};

const onChangeBalance = ({ toggleCalculator, onInitialBalanceChange }) => (value) => {
  onInitialBalanceChange(value);
  toggleCalculator(false);
};

const onToggleCalculator = ({ toggleCalculator, isCalculatorVisible }) => () => {
  toggleCalculator(!isCalculatorVisible);
};

const onSubmit = ({ submit, account, onClose, ...props }) => () => {
  const editedProps =
    R.pick(['name', 'icon', 'currency', 'date', 'initialBalance', 'balance'], props);
  const propsToSubmit = account ? { id: account.id, ...editedProps } : editedProps;

  submit(propsToSubmit);
  onClose();
};

const enhance = compose(
  withStyle({
    ...styles,
    calculatorModalStyle,
    fixedButtonContainer,
    iconStyle,
  }),
  withProps({ currencies, icons }),
  withAccount,
  withSubmitEvent,
  withState('name', 'onNameChange', accountProp('name')),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('currency', 'onCurrencyChange', accountProp('currency', currencies[0])),
  withState('initialBalance', 'onInitialBalanceChange', accountProp('initialBalance', 0)),
  withState('balance', 'setBalance', accountProp('balance')),
  withState('date', 'setDate', accountProp('date', new Date())),
  withState('isDatePickerVisible', 'setDatePickerState', false),
  withState('isPickerVisible', 'toggleIconPicker', false),
  withState('isCalculatorVisible', 'toggleCalculator', false),
  withHandlers({
    onDateChange,
    onTogglePicker,
    onIconChange,
    onToggleDatePicker,
    onChangeBalance,
    onToggleCalculator,
    onSubmit,
  }),
  withValidation,
);

export default enhance(AccountForm);
