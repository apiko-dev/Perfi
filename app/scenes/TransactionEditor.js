import React from 'react';
import { View } from 'react-native';
import TransactionForm from '../containers/TransactionFormContainer';
import styles from '../styles/SceneStyles';

const AddTransaction = () => (
  <View style={styles.rootStyle}>
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
