import React, { PropTypes } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  IconsPickerModal,
  TouchableFormInput,
  FormInputWithIcon,
  RoundButton,
  SceneContentWrapper,
  Calculator,
} from '../';
import SelectBox from '../SelectBox';
import calendarDateFormat from '../../utils/calendarDateFormat';

const getLabel = ({ name, sign }) => `${name}(${sign})`;

const AccountForm = (props) => {
  const {
    name,
    icon,
    icons,
    date,
    currency,
    onSubmit,
    isValid,
    currencies,
    initialBalance,
    onNameChange,
    onIconChange,
    onDateChange,
    isPickerVisible,
    onChangeBalance,
    onCurrencyChange,
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
    <SceneContentWrapper>
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
        <SelectBox
          getLabel={getLabel}
          selectedValue={currency}
          items={currencies}
          onValueChange={onCurrencyChange}
        />
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
        <RoundButton
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
    </SceneContentWrapper>
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
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  currency: PropTypes.object,
  initialBalance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    sign: PropTypes.string,
  })),
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
