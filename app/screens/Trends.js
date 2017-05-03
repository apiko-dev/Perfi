import React from 'react';
import { Platform, Text, View } from 'react-native';
import { DrawerButton } from '../components';

const Trends = () => (
  <View>
    <Text>Trends</Text>
  </View>
);

Trends.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Trends',
    left: Platform.OS === 'android' && <DrawerButton navigation={navigation} />,
  }),
};

export default Trends;
