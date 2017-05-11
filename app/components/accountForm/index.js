import { defaultProps, compose, mapProps, withHandlers, withProps, withState, withPropsOnChange } from 'recompose';
import R from 'ramda';
import AccountForm from './AccountForm';
import styles from '../../styles/FormStyles';
import icons from '../../constants/accountIcons';

const accountProp = propName => R.path(['account', propName]);

const enhance = compose(
  mapProps(props => ({
    ...props,
    style: {
      ...styles,
      ...props.style,
    },
  })),
  withProps(({ account, createAccount, updateAccount }) => ({
    submit: account ? updateAccount : createAccount,
  })),
  withState('name', 'onNameChange', accountProp('name')),
  withState('icon', 'setIcon', accountProp('icon')),
  withState('currency', 'onCurrencyChange', accountProp('currency')),
  withState('initialBalance', 'onInitialBalanceChange', accountProp('initialBalance')),
  withState('balance', 'setBalance', accountProp('balance')),
  withState('date', 'setDate', accountProp('date')),
  withState('isValid', 'setIsValid', accountProp('isValid')),
  withState('isDatePickerVisible', 'setDatePickerState'),
  withState('isPickerVisible', 'toggleIconPicker'),
  withPropsOnChange(() => true, props => ({
    ...props,
    isValid: !!props.name && props.name.length > 0 && (props.initialBalance || 0) >= 0,
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
    onSubmit: ({ submit, account, onClose, ...props }) => () => {
      const editedProps = R.pick(['name', 'icon', 'currency', 'date', 'initialBalance', 'balance'], props);
      const propsToSubmit = account ? { id: account.id, ...editedProps } : editedProps;

      submit(propsToSubmit);
      onClose();
    },
  }),
  defaultProps({
    date: new Date(),
    icon: icons[0],
    initialBalance: 0,
    isPickerVisible: false,
    isDatePickerVisible: false,
    isValid: false,
  }),
);

export default enhance(AccountForm);
