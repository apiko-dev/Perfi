import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import R from 'ramda';
import { compose, branch, renderComponent, withProps } from 'recompose';
import CalcButton from './CalculatorButton';
import colors from '../../styles/colors';
import styles from './CalculatorStyles';

const Button = onPress => token => <CalcButton key={token} token={token} onPress={onPress} />;

const ButtonsGroup = (onPress, style) => ({ tokens }) => (
  <View style={[styles.keyboardRowStyle, style]}>
    {R.map(Button(onPress), tokens)}
  </View>
);

const SubmitButton = branch(
  R.prop('isReadyForSubmit'),
  renderComponent(compose(withProps({
    icon: { name: 'done', color: colors.defaultPrimary },
  }))(CalcButton)),
)(CalcButton);

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

  const Group = ButtonsGroup(onPressToken, { flex: 2 });
  const Row = ButtonsGroup(onPressToken);

  return (
    <View>
      <View style={styles.expressionContainerStyle}>
        <Text style={styles.expressionStyle}>{expr}</Text>
      </View>
      <View style={styles.keyboardRowStyle}>
        <CalcButton token="C" onPress={onClear} />
        <Group tokens={['/', '*']} />
        <CalcButton icon={{ name: 'backspace' }} onPress={onBackspace} />
      </View>
      <Row tokens={['7', '8', '9', '-']} />
      <Row tokens={['4', '5', '6', '+']} />
      <View style={styles.keyboardRowStyle}>
        <View style={styles.keyboardShortRowStyle}>
          <Row tokens={['1', '2', '3']} />
          <Row tokens={['0', '000', '.']} />
        </View>
        <SubmitButton
          containerStyle={styles.submitButtonContainerStyle}
          buttonStyle={styles.submitButtonStyle}
          token="="
          isReadyForSubmit={isReadyForSubmit}
          onPress={isReadyForSubmit ? onSubmitResult : onCalculate}
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
