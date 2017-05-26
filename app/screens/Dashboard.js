import React, { PropTypes } from 'react';
import { View } from 'react-native';
import R from 'ramda';
import moment from 'moment';
import screens from '../constants/screens';
import { RoundButton, SlidesWithTabs } from '../components';
import {
  TransactionsHeaderContainer,
  TransactionsListContainer,
} from '../containers';
import styles from '../styles/DashboardStyles';

const getCurrentAccount = R.path(['state', 'params', 'account']);

const getTime = (index, interval = 'day') => moment().add(index, `${interval}s`);

const getPeriod = (index, interval = 'day') => ({
  from: getTime(index, interval).startOf(interval).toDate(),
  to: getTime(index, interval).endOf(interval).toDate(),
});

const getPeriodName = interval => index => getTime(index, interval).format('L');

const TransactionsList = navigation => ({ index, key }) => (
  <TransactionsListContainer
    key={key}
    onSelectTransaction={transaction => navigation.navigate(
      screens.TransactionEditor,
      { transaction },
    )}
    account={getCurrentAccount(navigation)}
    period={getPeriod(index)}
  />
);

const Dashboard = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <SlidesWithTabs
      slideRenderer={TransactionsList(navigation)}
      setTitle={getPeriodName()}
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
      onSelectAccount={account => navigation.setParams({ account })}
    />
  ),
});

export default Dashboard;
