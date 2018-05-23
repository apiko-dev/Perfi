import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

export default ({ children, size, value }) => ( // eslint-disable-line
  <View style={s.value}>
    <Text style={[s.valueText, value < 0 && s.expenseColor, size && { fontSize: size }]}>
      {value > 0 ? `+ $${value}` : `- $${value.toString().substr(1)}`}
    </Text>
    {children}
  </View>
);

