import React, { PropTypes } from 'react';
import { Platform, View } from 'react-native';
import { DrawerButton, TrendsForm } from '../components/index';
import AccountsSelectBox from '../containers/AccountsSelectBoxContainer';

const Trends = ({ transactions, categories, navigation }) => {
  const { state: { params } } = navigation;
  const selectedAccount = (params && params.selectedAccount) || {};

  return (
    <View>
      <TrendsForm
        transactions={transactions}
        categories={categories}
        selectedAccount={selectedAccount}
      />
    </View>
  );
};

Trends.propTypes = {
  transactions: PropTypes.object,
  categories: PropTypes.object,
  navigation: PropTypes.object,
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
