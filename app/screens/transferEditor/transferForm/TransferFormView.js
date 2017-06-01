import {
  compose,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import R from 'ramda';
import TransferForm from './TransferForm';

const transferProp = (propName, def) => R.pathOr(def, ['transfer', propName]);

const onValueChange = ({ setCalculatorVisible, setValue }) => (value) => {
  setValue(value);
  setCalculatorVisible(false);
};

const onDateChange = ({ setDatePickerVisible, setDate }) => (value) => {
  setDate(value);
  setDatePickerVisible(false);
};

const onToggleCalculator = ({ setCalculatorVisible, isCalculatorVisible }) => () => {
  setCalculatorVisible(!isCalculatorVisible);
};

const onToggleDatePicker = ({ isDatePickerVisible, setDatePickerVisible }) => () => {
  setDatePickerVisible(!isDatePickerVisible);
};

const onSubmit = ({ createTransfer, onClose, ...props }) => () => {
  const transferProps = R.pick(['value', 'date', 'notes'], props);
  const { accountFrom, accountTo } = props;

  createTransfer({
    ...transferProps,
    from: accountFrom.id,
    to: accountTo.id,
  });

  onClose();
};

const withValidation = withProps(({ accountFrom: from, accountTo: to, value }) => ({
  isValid: from && to && !R.eqProps('id', from, to) && value > 0,
}));

const enhance = compose(
  withState('accountFrom', 'setAccountFrom', transferProp('accountFrom')),
  withState('accountTo', 'setAccountTo', transferProp('accountTo')),
  withState('value', 'setValue', transferProp('value', 0)),
  withState('date', 'setDate', transferProp('date', new Date())),
  withState('notes', 'setNotes', transferProp('notes')),
  withState('isCalculatorVisible', 'setCalculatorVisible', false),
  withState('isDatePickerVisible', 'setDatePickerVisible', false),
  withProps(({ accounts, accountFrom = accounts[0], accountTo = accounts[1] }) => ({
    accountTo,
    accountFrom,
  })),
  withValidation,
  withHandlers({
    onValueChange,
    onDateChange,
    onToggleCalculator,
    onToggleDatePicker,
    onSubmit,
  }),
);

export default enhance(TransferForm);
