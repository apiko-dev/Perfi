import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import calendarDateFormat from '../../utils/calendarDateFormat';
import {
  SceneContentWrapper,
  RoundButton,
  SelectBox,
  Calculator,
  FormInputWithIcon,
  TouchableFormInput,
} from '../';

const getLabel = ({ name }) => name;
const getIcon = ({ icon }) => icon;

const TransferForm = (props) => {
  const {
    value,
    notes,
    date,
    accountsById,
    accountTo,
    accountFrom,
    setAccountFrom,
    setAccountTo,
    toggleCalculator,
    onDateChange,
    onToggleDatePicker,
    isDatePickerVisible,
    onValueChange,
    setNotes,
    isCalculatorVisible,
    isValid,
    onSubmit,
    style: {
      fixedButtonContainer,
      calculatorModalStyle,
      selectWithBorderStyle,
      blockStyle,
      rowStyle,
    },
  } = props;

  return (
    <SceneContentWrapper>
      <View style={blockStyle}>
        <View style={rowStyle}>
          <TouchableFormInput
            value={value.toString()}
            onPress={toggleCalculator}
          />
        </View>
        <View>
          <SelectBox
            getLabel={getLabel}
            getIcon={getIcon}
            withIcon
            selectedValue={accountFrom}
            items={accountsById}
            style={selectWithBorderStyle}
            onValueChange={setAccountFrom}
          />
          <Icon
            type="material-community"
            name="arrow-down"
          />
          <SelectBox
            getLabel={getLabel}
            getIcon={getIcon}
            withIcon
            selectedValue={accountTo}
            items={accountsById}
            style={selectWithBorderStyle}
            onValueChange={setAccountTo}
          />
        </View>
        <View>
          <DateTimePicker
            isVisible={isDatePickerVisible}
            onConfirm={onDateChange}
            onCancel={onToggleDatePicker}
          />
          <TouchableFormInput
            icon="calendar-blank"
            onPress={onToggleDatePicker}
            value={calendarDateFormat(date)}
          />
        </View>
        <View>
          <FormInputWithIcon
            icon="pen"
            value={notes}
            onChangeText={setNotes}
            placeholder="Notes"
            multiline
          />
        </View>
      </View>
      {isValid && <RoundButton
        style={fixedButtonContainer}
        onPress={onSubmit}
        iconName="check"
      />}
      <Modal
        style={calculatorModalStyle}
        isVisible={isCalculatorVisible}
      >
        <Calculator
          value={value}
          onSubmit={onValueChange}
        />
      </Modal>
    </SceneContentWrapper>
  );
};

TransferForm.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  onSubmit: PropTypes.func,
  setAccountFrom: PropTypes.func,
  accountsById: PropTypes.array,
  notes: PropTypes.string,
  setNotes: PropTypes.func,
  onDateChange: PropTypes.func,
  toggleCalculator: PropTypes.func,
  setAccountTo: PropTypes.func,
  onToggleDatePicker: PropTypes.func,
  onValueChange: PropTypes.func,
  style: PropTypes.object,
  accountFrom: PropTypes.object,
  accountTo: PropTypes.object,
  isDatePickerVisible: PropTypes.bool,
  isCalculatorVisible: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default TransferForm;
