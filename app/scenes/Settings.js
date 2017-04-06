import React from 'react';
import { Text, View } from 'react-native';

const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>
  </View>
);

Settings.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Settings',
  }),
};

export default Settings;
