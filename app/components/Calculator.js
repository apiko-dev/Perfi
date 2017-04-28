import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import Button from './CalculatorButton';
import styles from '../styles/CalculatorStyles';

const Calculator = ({
  onPressDigit,
  onPressOperator,
  onClear,
  expr,
}) => (
  <View>
    <View style={styles.expressionContainerStyle}>
      <Text>{expr}</Text>
    </View>
    <View style={styles.keyboardRowStyle}>
      <Button title="C" onPress={onClear} />
      <Button token="/" onPressToken={onPressOperator} />
      <Button token="*" onPressToken={onPressOperator} />
      <Button icon={{ name: 'backspace' }} onPress={onClear} />
    </View>
    <View style={styles.keyboardRowStyle}>
      <Button title="7" onPressToken={onPressDigit} />
      <Button token="8" onPressToken={onPressDigit} />
      <Button token="9" onPressToken={onPressDigit} />
      <Button token="-" onPressToken={onPressOperator} />
    </View>
    <View style={styles.keyboardRowStyle}>
      <Button title="4" onPressToken={onPressDigit} />
      <Button token="5" onPressToken={onPressDigit} />
      <Button token="6" onPressToken={onPressDigit} />
      <Button token="-" onPressToken={onPressOperator} />
    </View>
    <View style={styles.keyboardRowStyle}>
      <View style={styles.keyboardShortRowStyle}>
        <View style={styles.keyboardRowStyle}>
          <Button title="1" onPressToken={onPressDigit} />
          <Button token="2" onPressToken={onPressDigit} />
          <Button token="3" onPressToken={onPressDigit} />
        </View>
        <View style={styles.keyboardRowStyle}>
          <Button title="0" onPressToken={onPressDigit} />
          <Button token="000" onPressToken={onPressDigit} />
          <Button token="." onPressToken={onPressDigit} />
        </View>
      </View>
      <Button
        containerStyle={styles.submitButtonContainerStyle}
        buttonStyle={styles.submitButtonStyle}
        title="="
        onPress={() => {}}
      />
    </View>
  </View>
);

Calculator.propTypes = {
  expr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPressDigit: PropTypes.func,
  onPressOperator: PropTypes.func,
  onClear: PropTypes.func,
};

export default Calculator;
