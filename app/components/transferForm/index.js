import { compose, withPropsOnChange, mapProps, withState, withHandlers, defaultProps } from 'recompose';
import R from 'ramda';
import { NavigationActions } from 'react-navigation';
import TransferForm from './TransferForm';
import transactionFormStyle from '../../styles/TransactionFormStyles';
import buttonsStyles from '../../styles/ButtonsStyles';
import selectStyles from '../../styles/SelectBoxStyles';
import formStyles from '../../styles/FormStyles';

const transferProp = (propName, def) => R.pathOr(def, ['transfer', propName]);
const { calculatorModalStyle } = transactionFormStyle;
const { fixedButtonContainer } = buttonsStyles;
const { selectWithBorderStyle } = selectStyles;
const { blockStyle } = formStyles;

const enhance = compose(
  mapProps(({ style, accounts, ...props }) => ({
    ...props,
    accounts: R.values(accounts.byId),
    style: {
      ...style,
      calculatorModalStyle,
      selectWithBorderStyle,
      fixedButtonContainer,
      blockStyle,
    },
  })),
  withState('accountFrom', 'setAccountFrom', transferProp('accountFrom', {})),
  withState('accountTo', 'setAccountTo', transferProp('accountTo', {})),
  withState('value', 'setValue', transferProp('value', 1)),
  withState('date', 'setDate', transferProp('date', new Date())),
  withState('notes', 'setNotes', transferProp('notes')),
  withState('isCalculatorVisible', 'setCalculatorVisible'),
  withState('isDatePickerVisible', 'setDatePickerVisible'),
  withPropsOnChange(() => true, props => ({
    ...props,
    isValid: !!(props.accountFrom.id && props.accountTo.id && props.value >= 1 && props.date),
  })),
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
    onSubmit: ({ navigation, createTransfer, ...props }) => () => {
      const transferProps = R.pick(['accountFrom', 'accountTo', 'value', 'date', 'notes'], props);

      createTransfer(transferProps);
      navigation.dispatch(NavigationActions.back());
    },
  }),
  defaultProps({
    isValid: false,
    isDatePickerVisible: false,
  }),
);

export default enhance(TransferForm);
