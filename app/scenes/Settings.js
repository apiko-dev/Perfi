import React from 'react';
import { Platform, Text, View } from 'react-native';
import { DrawerButton } from '../components';

const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>
  </View>
);

Settings.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Settings',
    left: Platform.OS === 'android' && <DrawerButton navigation={navigation} />,
  }),
};

export default Settings;
