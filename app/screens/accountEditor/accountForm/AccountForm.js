import React, { PropTypes } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  IconsPickerModal,
  TouchableFormInput,
  FormInputWithIcon,
  ActionButton,
  ScreenWrapper,
  Calculator,
} from '../../../components';
import calendarDateFormat from '../../../utils/calendarDateFormat';

const AccountForm = (props) => {
  const {
    name,
    icon,
    icons,
    date,
    onSubmit,
    isValid,
    initialBalance,
    onNameChange,
    onIconChange,
    onDateChange,
    isPickerVisible,
    onChangeBalance,
    onToggleCalculator,
    onTogglePicker,
    onToggleDatePicker,
    isDatePickerVisible,
    isCalculatorVisible,
    style: {
      blockStyleDark,
      blockStyle,
      rowStyle,
      calculatorModalStyle,
      fixedButtonContainer,
      iconStyle,
    },
  } = props;

  return (
    <ScreenWrapper>
      <View style={blockStyle}>
        <View style={rowStyle}>
          <Icon
            onPress={onTogglePicker}
            name={icon}
            type="material-community"
            iconStyle={iconStyle}
            size={16}
            raised
          />
          <FormInputWithIcon
            onChangeText={onNameChange}
            value={name}
          />
        </View>
      </View>
      <View style={[blockStyle, blockStyleDark]}>
        <View>
          <Text>Initial balance</Text>
          <TouchableFormInput
            value={initialBalance.toString()}
            onPress={onToggleCalculator}
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
      </View>
      <IconsPickerModal
        isVisible={isPickerVisible}
        onIconPick={onIconChange}
        icons={icons}
        selectedIconName={icon}
        hideModal={onTogglePicker}
      />
      {isValid && (
        <ActionButton
          style={fixedButtonContainer}
          onPress={onSubmit}
          iconName="check"
        />
      )}
      <Modal
        style={calculatorModalStyle}
        isVisible={isCalculatorVisible}
      >
        <Calculator
          value={initialBalance}
          onSubmit={onChangeBalance}
        />
      </Modal>
    </ScreenWrapper>
  );
};

AccountForm.propTypes = {
  isValid: PropTypes.bool,
  isPickerVisible: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    View.propTypes.style,
  ]),
  icons: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  icon: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  initialBalance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onToggleDatePicker: PropTypes.func,
  isDatePickerVisible: PropTypes.bool,
  isCalculatorVisible: PropTypes.bool,
  onNameChange: PropTypes.func,
  onChangeBalance: PropTypes.func,
  onIconChange: PropTypes.func,
  onDateChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  onToggleCalculator: PropTypes.func,
  onTogglePicker: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AccountForm;
