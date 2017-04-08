import React from 'react';
import { Button, Platform, Text, View } from 'react-native';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';

const Dashboard = ({ navigation }) => (
  <View>
    <Text>Dashboard</Text>
    <Button
      title="Add transaction"
      onPress={() => navigation.navigate(scenes.AddTransaction)}
    />
  </View>
);

Dashboard.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Dashboard',
    ...Platform.select({
      android: {
        left: <DrawerButton navigation={navigation} />,
      },
    }),
  }),
};

export default Dashboard;
