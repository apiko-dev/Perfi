import React, { PropTypes } from 'react';
import { Platform, Text, View } from 'react-native';
import screens from '../constants/screens';
import { RoundButton, DrawerButton } from '../components';
import styles from '../styles/DashboardStyles';

const Dashboard = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <Text>Dashboard</Text>
    <RoundButton
      style={styles.addButtonStyle}
      iconName="add"
      onPress={() => navigation.navigate(screens.TransactionEditor)}
    />
  </View>
);

Dashboard.propTypes = {
  navigation: PropTypes.object,
};

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
