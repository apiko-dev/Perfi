import React, { PropTypes } from 'react';
import { View } from 'react-native';
import screens from '../constants/screens';
import { RoundButton } from '../components';
import {
  TransactionsHeaderContainer,
  TransactionsListContainer,
} from '../containers';
import styles from '../styles/DashboardStyles';

const Dashboard = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <TransactionsListContainer
      onSelectTransaction={transaction => navigation.navigate(
        screens.TransactionEditor,
        { transaction },
      )}
    />
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

Dashboard.navigationOptions = ({ navigation }) => ({
  title: 'Dashboard',
  header: (
    <TransactionsHeaderContainer
      navigation={navigation}
      onSelectAccount={(account) => alert(account && account.id) }
    />
  ),
});

export default Dashboard;
