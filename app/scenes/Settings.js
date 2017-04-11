import React from 'react';
import { Button, Platform, Text, View } from 'react-native';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';

const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>
    {Platform.OS === 'ios' && (
      <View>
        <Button
          title="Accounts"
          onPress={() => navigation.navigate(scenes.Accounts)}
        />
        <Button
          title="Categories"
          onPress={() => navigation.navigate(scenes.Categories)}
        />
      </View>
    )}
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
