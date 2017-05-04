import React, { PropTypes } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import screens from '../constants/screens';
import { DrawerButton } from '../components';

const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>
    {Platform.OS === 'ios' && (
      <View>
        <Button
          title="Accounts"
          onPress={() => navigation.navigate(screens.Accounts)}
        />
        <Button
          title="Categories"
          onPress={() => navigation.navigate(screens.Categories)}
        />
      </View>
    )}
  </View>
);

Settings.propTypes = {
  navigation: PropTypes.object,
};

Settings.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Settings',
    left: Platform.OS === 'android' && <DrawerButton navigation={navigation} />,
  }),
};

export default Settings;
