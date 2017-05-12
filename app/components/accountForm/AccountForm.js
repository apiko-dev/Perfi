import React, { PropTypes } from 'react';
import { Icon } from 'react-native-elements';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  IconsPickerModal,
  TextFieldWithIcon,
  RoundButton,
  FixedButtonsContainer,
  SceneContentWrapper,
} from '../';
import CurrencyPicker from '../CurrencyPicker';
import calendarDateFormat from '../../utils/calendarDateFormat';

const AccountForm = (props) => {
  const {
    style: { blockStyleDark, blockStyle, rowStyle },
    name,
    icon,
    date,
    currency,
    onSubmit,
    isValid,
    initialBalance,
    onNameChange,
    onIconChange,
    onDateChange,
    isPickerVisible,
    onCurrencyChange,
    onInitialBalanceChange,
    onTogglePicker,
    onToggleDatePicker,
    isDatePickerVisible,
  } = props;

  const iconsPickerButton = (
    <Icon
      onPress={onTogglePicker}
      name={icon}
      type="material-community"
    />
  );

  const pickerIcon = (
    <Icon
      name="calendar-blank"
      onPress={onToggleDatePicker}
      type="material-community"
    />
  );

  const submitButton = (
    <FixedButtonsContainer>
      <RoundButton
        onPress={onSubmit}
        iconName="check"
      />
    </FixedButtonsContainer>
  );

  return (
    <MenuContext>
      <SceneContentWrapper>
        <View style={blockStyle}>
          <View style={rowStyle}>
            <TextFieldWithIcon
              icon={iconsPickerButton}
              onChangeText={onNameChange}
              value={name}
            />
          </View>
          <View style={rowStyle}>
            <CurrencyPicker
              selectedValue={currency}
              onValueChange={onCurrencyChange}
            />
          </View>
        </View>
        <View style={[blockStyle, blockStyleDark]}>
          <View style={rowStyle}>
            <TextFieldWithIcon
              onChangeText={onInitialBalanceChange}
              value={initialBalance.toString()}
              label={'Initial balance'}
              keyboardType="numeric"
            />
          </View>
          <View style={rowStyle}>
            <TouchableWithoutFeedback onPress={onToggleDatePicker}>
              <View>
                <DateTimePicker
                  isVisible={isDatePickerVisible}
                  onConfirm={onDateChange}
                  onCancel={onToggleDatePicker}
                />
                <TextFieldWithIcon
                  icon={pickerIcon}
                  value={calendarDateFormat(date)}
                  editable={false}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <IconsPickerModal
          isVisible={isPickerVisible}
          onIconPick={onIconChange}
          selectedIconName={icon}
          hideModal={onTogglePicker}
        />
        { isValid && submitButton }
      </SceneContentWrapper>
    </MenuContext>
  );
};

AccountForm.propTypes = {
  isValid: PropTypes.bool,
  isPickerVisible: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    View.propTypes.style,
  ]),
  name: PropTypes.string,
  icon: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  currency: PropTypes.object,
  initialBalance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onToggleDatePicker: PropTypes.func,
  isDatePickerVisible: PropTypes.bool,
  onNameChange: PropTypes.func,
  onIconChange: PropTypes.func,
  onDateChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  onTogglePicker: PropTypes.func,
  onInitialBalanceChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AccountForm;
