import { defaultProps, compose, mapProps, withHandlers, withState, withPropsOnChange } from 'recompose';
import R from 'ramda';
import AccountForm from './AccountForm';
import styles from '../../styles/FormStyles';
import icons from '../../constants/accountIcons';

const accountProp = (propName, def) => R.pathOr(def, ['account', propName]);

const enhance = compose(
  mapProps(props => ({
    ...props,
    style: {
      ...styles,
      ...props.style,
    },
  })),
  withState('name', 'onNameChange', accountProp('name')),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('currency', 'onCurrencyChange', accountProp('currency')),
  withState('initialBalance', 'onInitialBalanceChange', accountProp('initialBalance', 0)),
  withState('balance', 'setBalance', accountProp('balance')),
  withState('date', 'setDate', accountProp('date', new Date())),
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
    isPickerVisible: false,
    isDatePickerVisible: false,
    isValid: false,
  }),
);

export default enhance(AccountForm);
