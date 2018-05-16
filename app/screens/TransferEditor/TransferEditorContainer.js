import { connect } from 'react-redux';
import R from 'ramda';
import { transfersOperations } from '../../modules/transfers/index';
import { compose, withHandlers, withProps, withState, hoistStatics } from 'recompose';
import { NavigationActions } from 'react-navigation';
import TransferEditorScreenView from './TransferEditorScreenView';

const mapStateToProps = ({ accounts }) => ({ accounts: R.values(accounts.byId) });

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

const onSubmit = ({ createTransfer, navigation, onClose, ...props }) => () => {
  const transferProps = R.pick(['value', 'date', 'notes'], props);
  const { accountFrom, accountTo } = props;

  createTransfer({
    ...transferProps,
    from: accountFrom.id,
    to: accountTo.id,
  });

  navigation.dispatch(NavigationActions.back());
};

const withValidation = withProps(({ accountFrom: from, accountTo: to, value }) => ({
  isValid: from && to && !R.eqProps('id', from, to) && value > 0,
}));

const enhance = compose(
  connect(mapStateToProps, transfersOperations),
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

export default hoistStatics(enhance)(TransferEditorScreenView);
