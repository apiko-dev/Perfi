import React from 'react';
import { Text, View } from 'react-native';

const AddAccount = ({ navigation }) => (
  <View>
    <Text>Add Account</Text>
  </View>
);

AddAccount.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Add Account',
  }),
};

export default AddAccount;
