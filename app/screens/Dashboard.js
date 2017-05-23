import React, { PropTypes } from 'react';
import { View } from 'react-native';
import R from 'ramda';
import screens from '../constants/screens';
import { RoundButton } from '../components';
import {
  TransactionsHeaderContainer,
  TransactionsListContainer,
} from '../containers';
import styles from '../styles/DashboardStyles';

const getCurrentAccount = R.path(['state', 'params', 'account']);

const Dashboard = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <TransactionsListContainer
      onSelectTransaction={transaction => navigation.navigate(
        screens.TransactionEditor,
        { transaction },
      )}
      account={getCurrentAccount(navigation)}
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
      currentAccount={getCurrentAccount(navigation)}
      onSelectAccount={(account) => navigation.setParams({ account }) }
    />
  ),
});

export default Dashboard;
