import React, { PropTypes } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  IconsPickerModal,
  TouchableFormInput,
  FormInputWithIcon,
  RoundButton,
  SceneContentWrapper,
} from '../';
import CurrencyPicker from '../CurrencyPicker';
import calendarDateFormat from '../../utils/calendarDateFormat';
import buttonsStyles from '../../styles/ButtonsStyles';
import inputStyles from '../../styles/FormInputWithIconStyles';

const { fixedButtonContainer } = buttonsStyles;
const { iconStyle } = inputStyles;

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

  return (
    <MenuContext>
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
          <CurrencyPicker
            selectedValue={currency}
            onValueChange={onCurrencyChange}
          />
        </View>
        <View style={[blockStyle, blockStyleDark]}>
          <View>
            <Text>Initial balance</Text>
            <FormInputWithIcon
              onChangeText={onInitialBalanceChange}
              value={initialBalance.toString()}
              keyboardType="numeric"
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
