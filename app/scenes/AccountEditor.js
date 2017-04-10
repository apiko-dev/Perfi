import React from 'react';
import { Text, View } from 'react-native';

const AccountEditor = ({ navigation }) => (
  <View>
    <Text>Account Editor</Text>
  </View>
);

AccountEditor.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: navigation.state.params.title,
  }),
};

export default AccountEditor;
