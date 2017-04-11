import React from 'react';
import { Text, View } from 'react-native';

const AddTransaction = () => (
  <View>
    <Text>Add Transaction</Text>
  </View>
);

AddTransaction.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Add Transaction',
  }),
};

export default AddTransaction;
