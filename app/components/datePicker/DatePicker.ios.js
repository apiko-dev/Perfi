import React, { PropTypes } from 'react';
import { View, DatePickerIOS } from 'react-native';
import wrapperStyles from '../../styles/TextFieldWithIconStyles';
import inputStyles from '../../styles/FormStyles';

const DatePicker = ({ value, onChange }) => (<View style={wrapperStyles.textFieldWrapper}>
  <DatePickerIOS
    style={inputStyles}
    date={value}
    onDateChange={onChange}
  />
</View>);

DatePicker.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  onChange: PropTypes.func,
};

export default DatePicker;
