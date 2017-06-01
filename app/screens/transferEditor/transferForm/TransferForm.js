import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import calendarDateFormat from '../../../utils/calendarDateFormat';
import {
  AccountItem,
  AccountTrigger,
  ActionButton,
  Calculator,
  FormInputWithIcon,
  Selector,
  TouchableFormInput,
} from '../../../components';
import styles from './TransferFormStyles';

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
    <View style={styles.rootStyle}>
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
        containerStyle={styles.iconContainerStyle}
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
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={onDateChange}
        onCancel={onToggleDatePicker}
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
      {isValid && (
        <ActionButton
          onPress={onSubmit}
          iconName="check"
        />
      )}
      <Modal
        style={styles.calculatorModalStyle}
        isVisible={isCalculatorVisible}
      >
        <Calculator
          value={value}
          onSubmit={onValueChange}
        />
      </Modal>
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
