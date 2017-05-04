import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import Button from './CalculatorButton';
import styles from '../../styles/CalculatorStyles';

const getIcon = name => ({
  name,
  style: { marginRight: 0 },
});

const Calculator = (props) => {
  const {
    expr,
    isReadyForSubmit,
    onPressToken,
    onCalculate,
    onClear,
    onBackspace,
    onSubmit,
  } = props;

  const submitButtonOptions = isReadyForSubmit ? {
    icon: getIcon('done'),
    onPress: onSubmit,
  } : {
    title: '=',
    onPress: onCalculate,
  };

  return (
    <View>
      <View style={styles.expressionContainerStyle}>
        <Text>{expr}</Text>
      </View>
      <View style={styles.keyboardRowStyle}>
        <Button title="C" onPress={onClear} />
        <Button token="/" onPress={onPressToken} />
        <Button token="*" onPress={onPressToken} />
        <Button icon={getIcon('backspace')} onPress={onBackspace} />
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
          {...submitButtonOptions}
        />
      </View>
    </View>
  );
};

Calculator.propTypes = {
  expr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isReadyForSubmit: PropTypes.bool,
  onBackspace: PropTypes.func,
  onCalculate: PropTypes.func,
  onClear: PropTypes.func,
  onPressToken: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Calculator;
