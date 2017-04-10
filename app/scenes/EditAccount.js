import React from 'react';
import { Text, View } from 'react-native';

const EditAccount = ({ navigation }) => (
  <View>
    <Text>Edit Account</Text>
  </View>
);

EditAccount.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Edit Account',
  }),
};

export default EditAccount;
