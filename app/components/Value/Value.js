import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';

const Value = ({
  currency: { sign },
  children,
  containerStyle,
  style,
  value,
  type,
  withoutPlus,
}) => {
  const incomeText = `${withoutPlus ? '' : '+ '}${sign}${value}`;

  return (
    <View style={[s.value, containerStyle]}>
      {{
        other: <Text style={[s.text, s.other, style]}>{sign + value}</Text>,
        income: <Text style={[s.text, s.income, style]}>{incomeText}</Text>,
        expense: <Text style={[s.text, s.expense, style]}>- {sign + value}</Text>,
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
  value: T.number,
  withoutPlus: T.bool,
};

export default Value;
