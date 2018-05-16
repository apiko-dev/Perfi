import React from 'react';
import PropTypes from 'prop-types';
import { AccountTrigger, ScreenWrapper } from '../../components';
import appStyles from '../../styles/AppStyles';
import calendarDateFormat from '../../utils/calendarDateFormat';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  TouchableFormInput,
  Selector,
  Icon,
  FormInputWithIcon,
  ActionButton,
  CalculatorModal,
  AccountItem,
} from '../../components';

const TransferEditor = ({
  navigation,
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
}) => (
  <ScreenWrapper>
      <View>
        <View >
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
        </View>
        <Icon
          iconStyle={[appStyles.iconStyle, appStyles.withMarginTop]}
          type="material-community"
          name="arrow-down"
        />
        <View>
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
        </View>
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
  </ScreenWrapper>
);

TransferEditor.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
});

TransferEditor.propTypes = {
  navigation: PropTypes.object,
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

export default TransferEditor;
