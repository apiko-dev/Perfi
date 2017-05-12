import React, { PropTypes } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles/TextFieldWithIconStyles';
import InputField from './InputField';

const { textFieldWrapper, labelTextStyle, iconWrapper } = styles;

const TextFieldWithIcon = ({ icon, label, onPress, ...props }) => (
  <View>
    <View style={textFieldWrapper}>
      <Text style={labelTextStyle}>{ label }</Text>
    </View>
    <View style={textFieldWrapper}>
      <View style={iconWrapper}>{ icon }</View>
      <TouchableWithoutFeedback onPress={onPress}>
        <InputField
          {...props}
        />
      </TouchableWithoutFeedback>
    </View>
  </View>
);

TextFieldWithIcon.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  onPress: PropTypes.func,
};

TextFieldWithIcon.defaultProps = {
  onPress: () => {},
};

export default TextFieldWithIcon;
