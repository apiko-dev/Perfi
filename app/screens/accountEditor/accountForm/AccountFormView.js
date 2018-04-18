import { compose, withHandlers, withState, withProps } from 'recompose';
import R from 'ramda';
import AccountForm from './AccountForm';
import icons from '../../../constants/accountIcons';
import { getParam } from '../../../utils/navHelpers';

const accountProp = (propName, def) => R.pathOr(def, ['account', propName]);

const withAccount = withProps(({ navigation }) => ({
  account: getParam('account')(navigation),
}));

const withValidation = withProps(({ name }) => ({
  isValid: !!name && name.length > 0,
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
  withAccount,
  withSubmitEvent,
  withProps({ icons }),
  withState('name', 'onNameChange', accountProp('name')),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
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
