import React, { PropTypes } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import screens from '../constants/screens';
import { DrawerButton, PieChart } from '../components';

const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>

    { Platform.select({
      ios: (
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
      ) }) }
  </View>
);

Settings.propTypes = {
  navigation: PropTypes.object,
};

Settings.navigationOptions = ({ navigation }) => ({
  title: 'Settings',
  ...Platform.select({
    android: {
      headerLeft: <DrawerButton navigation={navigation} />,
    },
  }),
});

export default Settings;
