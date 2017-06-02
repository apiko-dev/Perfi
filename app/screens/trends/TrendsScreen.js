import React, { PropTypes } from 'react';
import { ScreenWrapper } from '../../components';
import TrendsFormView from './trendsForm/TrendsFormView'
import AccountsSelectBox from './AccountsSelectBoxContainer';

const Trends = ({ transactions, categories, navigation }) => {
  const { state: { params } } = navigation;
  const selectedAccount = (params && params.selectedAccount) || {};

  return (
    <ScreenWrapper>
      <TrendsFormView
        transactions={transactions}
        categories={categories}
        selectedAccount={selectedAccount}
      />
    </ScreenWrapper>
  );
};

Trends.propTypes = {
  transactions: PropTypes.object,
  categories: PropTypes.object,
  navigation: PropTypes.object,
};

Trends.navigationOptions = ({ navigation }) => ({
  title: 'Trends',
  headerRight: <AccountsSelectBox
    selectedAccount={navigation.state.params && navigation.state.params.selectedAccount}
    onSelect={account => navigation.setParams({ selectedAccount: account })}
    withIcon
  />,
});

export default Trends;
