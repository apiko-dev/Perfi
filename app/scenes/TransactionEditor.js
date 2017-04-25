import React from 'react';
import { View } from 'react-native';
import TransactionForm from '../containers/TransactionFormContainer';

const AddTransaction = () => (
  <View>
    <TransactionForm />
  </View>
);

AddTransaction.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Add Transaction',
  }),
};

export default AddTransaction;
