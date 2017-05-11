import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/FormStyles';

const InputField = props => (
  <TextInput
    {...props}
    autoCorrect={false}
    style={styles.textInputStyle}
  />
);

export default InputField;
