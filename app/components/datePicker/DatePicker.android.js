import React, { PropTypes } from 'react';
import { DatePickerAndroid } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TextInputWithIcon from '../TextFieldWithIcon';
import calendarDateFormat from '../../configs/calendarDateFormat';
import Button from '../Button';

const DatePicker = ({ value, onChange }) => {
  const showPicker = async () => {
    await DatePickerAndroid.open({
      date: new Date(value),
    }).then(({ action, year, month, day }) => {
      if (action !== DatePickerAndroid.dismissedAction) {
        onChange(new Date(year, month, day));
      }
    });
  };

  const pickerIcon = (
    <Button
      icon={'calendar-blank'}
      iconsSet={MaterialCommunityIcons}
      onPress={showPicker}
    />
  );

  return (
    <TextInputWithIcon
      icon={pickerIcon}
      value={calendarDateFormat(value)}
      editable={false}
      onPress={showPicker}
    />
  );
};

DatePicker.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)],
  ),
  onChange: PropTypes.func,
};

export default DatePicker;
