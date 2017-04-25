import React, { PropTypes } from 'react';
import { DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputWithIcon from '../common/TextFieldWithIcon';
import calendarDateFormat from '../../configs/calendarDateFormat';
import Button from '../common/Button';

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

  const pickerIcon = (<Button
    icon={'calendar-blank'}
    IconsSet={Icon}
    onPress={showPicker}
  />);

  return (<TextInputWithIcon
    icon={pickerIcon}
    value={calendarDateFormat(value)}
    editable={false}
  />);
};

DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func,
};

export default DatePicker;
