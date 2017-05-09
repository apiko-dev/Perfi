import { defaultProps, compose, mapProps, withHandlers, withProps, withState, withPropsOnChange } from 'recompose';
import R from 'ramda';
import AccountForm from './AccountForm';
import styles from '../../styles/AccountsStyles';
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
  withState('name', 'setName', accountProp('name')),
  withState('icon', 'setIcon', accountProp('icon')),
  withState('currency', 'setCurrency', accountProp('currency')),
  withState('initialBalance', 'setInitialBalance', accountProp('initialBalance')),
  withState('balance', 'setBalance', accountProp('balance')),
  withState('date', 'setDate', accountProp('date')),
  withState('isPickerVisible', 'toggleIconPicker'),
  withState('isValid', 'setIsValid', accountProp('isValid')),
  withPropsOnChange(['name', 'initialBalance', 'balance', 'date', 'currency', 'icon'], props => ({
    ...props,
    isValid: props.name && (props.initialBalance || 0) >= 0,
  })),
  withHandlers({
    onDateChange: ({ setDate }) => (value) => {
      setDate(value);
    },
    onCurrencyChange: ({ setCurrency }) => (value) => {
      setCurrency(value);
    },
    onInitialBalanceChange: ({ setInitialBalance }) => (value) => {
      setInitialBalance(value);
    },
    onTogglePicker: ({ toggleIconPicker, isPickerVisible }) =>
      () => {
        toggleIconPicker(!isPickerVisible);
      },
    onIconChange: ({ setIcon, toggleIconPicker }) => (value) => {
      toggleIconPicker(false);
      setIcon(value);
    },
    onNameChange: ({ setName }) => (value) => {
      setName(value);
    },
    onSubmit: ({ submit, account, onClose }) => (props) => {
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
    isValid: false,
  }),
);

export default enhance(AccountForm);
