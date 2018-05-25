import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

export default ({ children, style, value, isTransfer, withoutPlus }) => { // eslint-disable-line

  const type = (+value === 0 || isTransfer) ? 'other' : Number(value) > 0 ? 'income' : 'expense';

  const incomeText = withoutPlus ? `$${value}` : `+ $${value}`;

  return (
    <View style={s.value}>
      {(() => {
        switch (type) {
          case 'other':
            return <Text style={[s.text, s.other, style]}>${Math.abs(value)}</Text>;
          case 'income':
            return <Text style={[s.text, s.income, style]}>{incomeText}</Text>;
          case 'expense':
            return <Text style={[s.text, s.expense, style]}>- ${Math.abs(value)}</Text>;
          default:
            return null;
        }
      })()}
      {children}
    </View>
  );
};

