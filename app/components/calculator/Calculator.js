import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import Button from './CalculatorButton';
import styles from '../../styles/CalculatorStyles';

const backspaceIcon = {
  name: 'backspace',
  style: { marginRight: 0 },
};

const Calculator = ({
  expr,
  onPressToken,
  onClear,
  onBackspace,
  onSubmit,
}) => (
  <View>
    <View style={styles.expressionContainerStyle}>
      <Text>{expr}</Text>
    </View>
    <View style={styles.keyboardRowStyle}>
      <Button title="C" onPress={onClear} />
      <Button token="/" onPress={onPressToken} />
      <Button token="*" onPress={onPressToken} />
      <Button icon={backspaceIcon} onPress={onBackspace} />
    </View>
    <View style={styles.keyboardRowStyle}>
      <Button token="7" onPress={onPressToken} />
      <Button token="8" onPress={onPressToken} />
      <Button token="9" onPress={onPressToken} />
      <Button token="-" onPress={onPressToken} />
    </View>
    <View style={styles.keyboardRowStyle}>
      <Button token="4" onPress={onPressToken} />
      <Button token="5" onPress={onPressToken} />
      <Button token="6" onPress={onPressToken} />
      <Button token="+" onPress={onPressToken} />
    </View>
    <View style={styles.keyboardRowStyle}>
      <View style={styles.keyboardShortRowStyle}>
        <View style={styles.keyboardRowStyle}>
          <Button token="1" onPress={onPressToken} />
          <Button token="2" onPress={onPressToken} />
          <Button token="3" onPress={onPressToken} />
        </View>
        <View style={styles.keyboardRowStyle}>
          <Button token="0" onPress={onPressToken} />
          <Button token="000" onPress={onPressToken} />
          <Button token="." onPress={onPressToken} />
        </View>
      </View>
      <Button
        containerStyle={styles.submitButtonContainerStyle}
        buttonStyle={styles.submitButtonStyle}
        title="="
        onPress={onSubmit}
      />
    </View>
  </View>
);

Calculator.propTypes = {
  expr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPressToken: PropTypes.func,
  onClear: PropTypes.func,
  onBackspace: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Calculator;
