import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';
import currencies from '../../constants/currencies';

const Value = ({
  currency: { sign },
  children,
  containerStyle,
  style,
  value,
  type,
  withoutPlus,
}) => {
  const text = currencies.hryvnia.sign === sign ? Math.abs(value) + sign : sign + Math.abs(value);
  const incomeText = `${withoutPlus ? '' : '+ '}${text}`;

  return (
    <View style={[s.value, containerStyle]}>
      {{
        other: <Text style={[s.text, s.other, style]}>{text}</Text>,
        income: <Text style={[s.text, s.income, style]}>{incomeText}</Text>,
        expense: <Text style={[s.text, s.expense, style]}>- {text}</Text>,
      }[type]}
      {children}
    </View>
  );
};

Value.propTypes = {
  currency: T.shape({
    name: T.string,
    sign: T.string,
  }),
  children: T.element,
  containerStyle: ViewPropTypes.style,
  style: Text.propTypes.style,
  type: T.oneOf(['other', 'income', 'expense']),
  value: T.oneOfType([T.string, T.number]),
  withoutPlus: T.bool,
};

export default Value;
