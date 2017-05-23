import React, { PropTypes } from 'react';
import { Platform, View } from 'react-native';
import { DrawerButton, TrendsForm } from '../components/index';
import AccountsSelectBox from '../containers/AccountsSelectBoxContainer';

const Trends = ({ transactions }) => (
  <View>
    <TrendsForm transactions={transactions} />
  </View>
);

Trends.propTypes = {
  transactions: PropTypes.object,
};

Trends.navigationOptions = ({ navigation }) => ({
  title: 'Trends',
  ...Platform.select({
    android: {
      headerLeft: <DrawerButton navigation={navigation} />,
    },
  }),
  headerRight: <AccountsSelectBox
    selectedAccount={navigation.state.params && navigation.state.params.selectedAccount}
    onSelect={account => navigation.setParams({ selectedAccount: account })}
    withIcon
  />,
});

export default Trends;
