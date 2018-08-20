import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import R from 'ramda';
import CalcButton from './components/CalculatorButton';
import s from './styles';
import { colors } from '../../styles';
import { HeaderTitle, Button, Value } from '../../components';
import { getParam } from '../../utils/navHelpers';

const Button2 = onPress => token => <CalcButton key={token} token={token} onPress={onPress} />;

const ButtonsGroup = (onPress, style) => ({ tokens }) => ( // eslint-disable-line
  <View style={[s.keyboardRowStyle, style]}>
    {R.map(Button2(onPress), tokens)}
  </View>
);

const Calculator = (props) => {
  const {
    expr,
    onPressToken,
    onClear,
    onBackspace,
    onSubmitResult,
    isIncome,
  } = props;

  const Row = ButtonsGroup(onPressToken);

  return (
    <View style={s.root}>

      <View
        style={
          [s.expressionContainerStyle, { backgroundColor: colors[isIncome ? 'green' : 'red'] }]
        }
      >
        <Value style={s.expressionStyle} value={expr} type={isIncome ? 'income' : 'expense'} />
      </View>

      <View style={s.keyboardContainer}>
        <View style={s.keyboardRowStyle}>
          <View style={s.buttonsGroup}>
            <Row tokens={['1', '2', '3']} />
          </View>
          <CalcButton token="C" onPress={onClear} />
        </View>
        <View style={s.keyboardRowStyle}>
          <View style={s.buttonsGroup}>
            <Row tokens={['4', '5', '6']} />
          </View>
          <CalcButton icon={{ name: 'backspace' }} onPress={onBackspace} />
        </View>
        <Row tokens={['7', '8', '9', '']} />
        <Row tokens={['0', '00', '.', '']} />
      </View>
      <Button
        secondaryOpacity
        title="OK"
        onPress={onSubmitResult}
      />
    </View>
  );
};

Calculator.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle
    title={getParam('type')(navigation) === 'income' ? 'Add Income' : 'Add Expense'}
  />,

});


Calculator.propTypes = {
  expr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBackspace: PropTypes.func,
  onClear: PropTypes.func,
  onPressToken: PropTypes.func,
  onSubmitResult: PropTypes.func,
  isIncome: PropTypes.bool,
};

export default Calculator;
