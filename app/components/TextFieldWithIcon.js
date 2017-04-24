import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/TextFieldWithIconStyles';
import InputField from '../components/InputField';

const { textFieldWrapper, labelTextStyle, iconWrapper } = styles;

const TextFieldWithIcon = ({ icon, label, ...props }) => (<View>
  <View style={textFieldWrapper}>
    <Text style={labelTextStyle}>{ label }</Text>
  </View>
  <View style={textFieldWrapper}>
    <View style={iconWrapper}>{ icon }</View>
    <InputField
      {...props}
    />
  </View>
</View>);

TextFieldWithIcon.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  onPress: PropTypes.func,
};

TextFieldWithIcon.defaultProps = {
  onPress: () => {
  },
};

export default TextFieldWithIcon;
