import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import calendarDateFormat from '../../../utils/calendarDateFormat';
import {
  AccountItem,
  AccountTrigger,
  ActionButton,
  CalculatorModal,
  Card,
  FormInputWithIcon,
  Selector,
  TouchableFormInput,
} from '../../../components';
import appStyles from '../../../styles/AppStyles';

const TransferForm = (props) => {
  const {
    value,
    notes,
    date,
    accounts,
    accountFrom,
    accountTo,
    setAccountFrom,
    setAccountTo,
    setNotes,
    onDateChange,
    onSubmit,
    onToggleCalculator,
    onToggleDatePicker,
    onValueChange,
    isCalculatorVisible,
    isDatePickerVisible,
    isValid,
  } = props;

  return (
    <View style={appStyles.rootStyle}>
      <Card>
        <TouchableFormInput
          icon="calculator"
          value={value.toString()}
          onPress={onToggleCalculator}
        />
        <Selector
          options={accounts}
          currentOption={accountFrom}
          optionRenderer={AccountItem}
          triggerRenderer={AccountTrigger}
          onSelect={setAccountFrom}
        />
        <Icon
          iconStyle={[appStyles.iconStyle, appStyles.withMarginTop]}
          type="material-community"
          name="arrow-down"
        />
        <Selector
          options={accounts}
          currentOption={accountTo}
          optionRenderer={AccountItem}
          triggerRenderer={AccountTrigger}
          onSelect={setAccountTo}
        />
        <TouchableFormInput
          icon="calendar"
          onPress={onToggleDatePicker}
          value={calendarDateFormat(date)}
        />
        <FormInputWithIcon
          icon="pen"
          value={notes}
          onChangeText={setNotes}
          placeholder="Notes"
          multiline
        />
      </Card>
      {isValid && (
        <ActionButton
          onPress={onSubmit}
          iconName="check"
        />
      )}
      <CalculatorModal
        value={value}
        isVisible={isCalculatorVisible}
        onSubmit={onValueChange}
      />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={onDateChange}
        onCancel={onToggleDatePicker}
      />
    </View>
  );
};

TransferForm.propTypes = {
  value: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  onSubmit: PropTypes.func,
  setAccountFrom: PropTypes.func,
  accounts: PropTypes.array,
  notes: PropTypes.string,
  setNotes: PropTypes.func,
  onDateChange: PropTypes.func,
  onToggleCalculator: PropTypes.func,
  setAccountTo: PropTypes.func,
  onToggleDatePicker: PropTypes.func,
  onValueChange: PropTypes.func,
  accountFrom: PropTypes.object,
  accountTo: PropTypes.object,
  isDatePickerVisible: PropTypes.bool,
  isCalculatorVisible: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default TransferForm;
