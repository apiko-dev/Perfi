import React, { PropTypes } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import screens from '../constants/screens';
import { DrawerButton } from '../components';
import PieChart from '../components/PieChart';

const Settings = ({ navigation }) => (
  <PieChart />
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
