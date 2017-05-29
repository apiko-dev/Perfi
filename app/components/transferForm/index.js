import {
  compose,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import R from 'ramda';
import TransferForm from './TransferForm';
import transactionFormStyle from '../../styles/TransactionFormStyles';
import buttonsStyles from '../../styles/ButtonsStyles';
import selectStyles from '../../styles/SelectBoxStyles';
import formStyles from '../../styles/FormStyles';
import { withStyle } from '../../utils/enhancers';

const transferProp = (propName, def) => R.pathOr(def, ['transfer', propName]);
const { calculatorModalStyle } = transactionFormStyle;
const { fixedButtonContainer } = buttonsStyles;
const { selectWithBorderStyle } = selectStyles;
const { blockStyle, rowStyle } = formStyles;

const enhance = compose(
  withStyle({
    calculatorModalStyle,
    selectWithBorderStyle,
    fixedButtonContainer,
    blockStyle,
    rowStyle,
  }),
  withState('accountFrom', 'setAccountFrom', transferProp('accountFrom')),
  withState('accountTo', 'setAccountTo', transferProp('accountTo')),
  withState('value', 'setValue', transferProp('value', 0)),
  withState('date', 'setDate', transferProp('date', new Date())),
  withState('notes', 'setNotes', transferProp('notes')),
  withState('isCalculatorVisible', 'setCalculatorVisible', false),
  withState('isDatePickerVisible', 'setDatePickerVisible', false),
  withProps(({ accounts, accountFrom, accountTo, ...props }) => {
    const accountsById = R.values(accounts.byId);
    const accountFromOrDefault = accountFrom || accountsById[0] || {};
    const accountToOrDefault = accountTo || accountsById[1] || accountsById[0] || {};

    return ({
      ...props,
      accountsById: R.values(accounts.byId),
      accountTo: accountToOrDefault,
      accountFrom: accountFromOrDefault,
      isValid: !!(accountToOrDefault && accountFromOrDefault && props.value >= 1 && props.date),
    });
  }),
  withHandlers({
    toggleCalculator: ({ setCalculatorVisible, isCalculatorVisible }) => () => {
      setCalculatorVisible(!isCalculatorVisible);
    },
    onValueChange: ({ setCalculatorVisible, setValue }) => (value) => {
      setValue(value);
      setCalculatorVisible(false);
    },
    onDateChange: ({ setDatePickerVisible, setDate }) => (value) => {
      setDate(value);
      setDatePickerVisible(false);
    },
    onToggleDatePicker: ({ isDatePickerVisible, setDatePickerVisible }) => () => {
      setDatePickerVisible(!isDatePickerVisible);
    },
    onSubmit: ({ navigation, createTransfer, updateAccount, onClose, ...props }) => () => {
      const transferProps = R.pick(['accountFrom', 'accountTo', 'value', 'date', 'notes'], props);
      const { accountFrom, accountTo, value } = props;

      createTransfer(transferProps);
      updateAccount({
        ...accountFrom,
        balance: accountFrom.balance - value,
      });

      updateAccount({
        ...accountTo,
        balance: +accountTo.balance + +value,
      });

      onClose();
    },
  }),
);

export default enhance(TransferForm);
