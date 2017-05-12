import React from 'react';
import { Platform, Text, View } from 'react-native';
import { DrawerButton } from '../components';

const Trends = () => (
  <View>
    <Text>Trends</Text>
  </View>
);

Trends.navigationOptions = ({ navigation }) => ({
  title: 'Trends',
  ...Platform.select({
    android: {
      headerLeft: <DrawerButton navigation={navigation} />,
    },
  }),
});

export default Trends;
