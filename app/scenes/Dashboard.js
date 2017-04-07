import React from 'react';
import { Button, Text, View } from 'react-native';
import scenes from '../constants/scenes';

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
  }),
};

export default Dashboard;
