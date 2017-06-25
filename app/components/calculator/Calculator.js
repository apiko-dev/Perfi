import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import R from 'ramda';
import Button  from './CalculatorButton';
import colors from '../../styles/colors';
import styles from './CalculatorStyles';

const renderButton = onPress => token => <Button key={token} token={token} onPress={onPress} />;

const renderButtonsGroup = (onPress, tokens) => R.map(renderButton(onPress), tokens);

const renderButtonsRow = onPress => tokens => (
  <View style={styles.keyboardRowStyle}>
    {renderButtonsGroup(onPress, tokens)}
  </View>
);

const Calculator = (props) => {
  const {
    expr,
    isReadyForSubmit,
    onPressToken,
    onCalculate,
    onClear,
    onBackspace,
    onSubmitResult,
  } = props;

  const submitButtonOptions = isReadyForSubmit ? {
    icon: { name: 'done', color: colors.defaultPrimary },
    onPress: onSubmitResult,
  } : {
    token: '=',
    onPress: onCalculate,
  };

  const buttonsRow = renderButtonsRow(onPressToken);

  return (
    <View>
      <View style={styles.expressionContainerStyle}>
        <Text style={styles.expressionStyle}>{expr}</Text>
      </View>
      <View style={styles.keyboardRowStyle}>
        <Button token="C" onPress={onClear} />
        {renderButtonsGroup(onPressToken, ['/', '*'])}
        <Button icon={{ name: 'backspace' }} onPress={onBackspace} />
      </View>
      {buttonsRow(['7', '8', '9', '-'])}
      {buttonsRow(['4', '5', '6', '+'])}
      <View style={styles.keyboardRowStyle}>
        <View style={styles.keyboardShortRowStyle}>
          {buttonsRow(['1', '2', '3'])}
          {buttonsRow(['0', '000', '.'])}
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
  onSubmitResult: PropTypes.func,
};

export default Calculator;
