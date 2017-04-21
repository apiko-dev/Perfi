import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/TextFieldWithIconStyles';
import InputField from '../components/InputField';

const TextFieldWithIcon = ({ icon, label, ...props }) => (<View>
  <View style={styles.textFieldWrapper}>
    <Text style={styles.labelTextStyle}>{ label }</Text>
  </View>
  <View style={styles.textFieldWrapper}>
    <View style={styles.iconWrapper}>{ icon }</View>
    <InputField
      placeholder="Pick icon"
      {...props}
    />
  </View>
</View>);

export default TextFieldWithIcon;
