import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Text from '../Text';
import s from './styles';
import { colors } from '../../styles';


const renderIcon = (icon, isSelected) => (
  <MaterialCommunityIcons
    {...icon}
    style={[s.icon, isSelected && { color: colors.green }]}
  />
);

const CustomDatePicker = ({
  inputStyle,
  isSelected,
  label,
  labelStyle,
  placeholder,
  icon,
  displayedDate,
  defaultValue,
  onSelectDate,
  containerStyle,
  colorIsSelected = colors.green,
  resetTrigger,
  ...props
}) => (
  <View style={[s.container, containerStyle]}>
    {!!label && <Text style={[s.label, labelStyle]}>{label}</Text>}
    <DatePicker
      date={resetTrigger ?
        undefined :
        displayedDate || defaultValue}
      placeholder={placeholder}
      style={[s.root, inputStyle]}
      customStyles={{
        dateInput: [s.input, isSelected && { borderColor: colorIsSelected }],
        dateText: s.inputText,
        dateTouchBody: s.body,
        btnTextConfirm: s.btnConfirm,
        btnTextCancel: s.btnCancel,
        placeholderText: s.placeholder,
      }}
      iconComponent={renderIcon(icon, isSelected)}
      onDateChange={onSelectDate}
      {...props}
    />
  </View>
);

CustomDatePicker.propTypes = {
  inputStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  label: T.string,
  labelStyle: ViewPropTypes.style,
  onSelectDate: T.func,
  displayedDate: T.string,
  placeholder: T.string,
  icon: T.object,
  defaultValue: T.any,
  format: T.string,
  confirmBtnText: T.string,
  cancelBtnText: T.string,
  colorIsSelected: T.string,
  androidMode: T.oneOf(['default', 'calendar', 'spinner']),
  mode: T.oneOf(['date', 'time', 'datetime']),
  resetTrigger: T.bool,
  isSelected: T.bool,
};

export default CustomDatePicker;
