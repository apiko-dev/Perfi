import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

export default ({ children, size, value}) => { // eslint-disable-line

  const is = {
    income: Number(value) > 0,
    expense: Number(value) < 0,
    zero: Number(value) === 0,
  };

  return (
    <View style={s.value}>
      <Text
        style={[
          s.valueText,
          is.expense && s.expenseColor,
          is.zero && s.null,
          size && { fontSize: size },
        ]}
      >
        {is.income && `+ $${value}`}
        {is.expense && `- $${value.toString().substr(1)}`}
        {is.zero && `${value}`}
      </Text>
      {children}
    </View>
  );
};

