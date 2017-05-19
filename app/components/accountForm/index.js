import {
  compose,
  mapProps,
  withHandlers,
  withState,
  withProps,
} from 'recompose';
import R from 'ramda';
import AccountForm from './AccountForm';
import styles from '../../styles/FormStyles';
import icons from '../../constants/accountIcons';
import transactionFormStyle from '../../styles/TransactionFormStyles';
import buttonsStyles from '../../styles/ButtonsStyles';
import inputStyles from '../../styles/FormInputWithIconStyles';
import currencies from '../../constants/currencies';
import { withStyle } from '../../utils/enhancers';

const accountProp = (propName, def) => R.pathOr(def, ['account', propName]);
const { calculatorModalStyle } = transactionFormStyle;
const { fixedButtonContainer } = buttonsStyles;
const { iconStyle } = inputStyles;

const enhance = compose(
  withStyle({
    ...styles,
    calculatorModalStyle,
    fixedButtonContainer,
    iconStyle,
  }),
  mapProps(props => ({
    ...props,
    currencies,
    icons,
  })),
  withState('name', 'onNameChange', accountProp('name')),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('currency', 'onCurrencyChange', accountProp('currency', currencies[0])),
  withState('initialBalance', 'onInitialBalanceChange', accountProp('initialBalance', 0)),
  withState('balance', 'setBalance', accountProp('balance')),
  withState('date', 'setDate', accountProp('date', new Date())),
  withState('isDatePickerVisible', 'setDatePickerState', false),
  withState('isPickerVisible', 'toggleIconPicker', false),
  withState('isCalculatorVisible', 'toggleCalculator', false),
  withProps(props => ({
    ...props,
    isValid: !!props.name && props.name.length > 0 && props.initialBalance >= 0,
  })),
  withProps(({ account, createAccount, updateAccount }) => ({
    submit: account ? updateAccount : createAccount,
  })),
  withHandlers({
    onDateChange: ({ setDate, setDatePickerState }) => (date) => {
      setDate(date);
      setDatePickerState(false);
    },
    onTogglePicker: ({ toggleIconPicker, isPickerVisible }) => () => {
      toggleIconPicker(!isPickerVisible);
    },
    onIconChange: ({ setIcon, toggleIconPicker }) => (value) => {
      toggleIconPicker(false);
      setIcon(value);
    },
    onToggleDatePicker: ({ isDatePickerVisible, setDatePickerState }) => () => {
      setDatePickerState(!isDatePickerVisible);
    },
    onChangeBalance: ({ toggleCalculator, onInitialBalanceChange }) => (value) => {
      onInitialBalanceChange(value);
      toggleCalculator(false);
    },
    onToggleCalculator: ({ toggleCalculator, isCalculatorVisible }) => () => {
      toggleCalculator(!isCalculatorVisible);
    },
    onSubmit: ({ submit, account, onClose, ...props }) => () => {
      const editedProps =
        R.pick(['name', 'icon', 'currency', 'date', 'initialBalance', 'balance'], props);
      const propsToSubmit = account ? { id: account.id, ...editedProps } : editedProps;

      submit(propsToSubmit);
      onClose();
    },
  }),
);

export default enhance(AccountForm);
