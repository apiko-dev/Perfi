import React from 'react';
import { Text, View } from 'react-native';

const TransferEditor = () => (
  <View>
    <Text>Transfer editor</Text>
  </View>
);

TransferEditor.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
});

export default TransferEditor;
