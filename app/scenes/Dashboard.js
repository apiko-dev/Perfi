import React from 'react';
import { Text, View } from 'react-native';

const Dashboard = ({ navigation }) => (
  <View>
    <Text>Dashboard</Text>
  </View>
);

Dashboard.navigationOptions = {
  drawer: {
    label: 'Dashboard',
  },
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Dashboard',
  }),
};

export default Dashboard;
