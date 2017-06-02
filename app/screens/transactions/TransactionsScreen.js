import React, { PropTypes } from 'react';
import screens from '../../constants/screens';
import { ActionButton, ScreenWrapper } from '../../components';
import TransactionsHeaderContainer from './screenHeader/TransactionsHeaderContainer';
import TransactionsSlider from './TransactionsSlider';

const Transactions = ({ navigation }) => (
  <ScreenWrapper>
    <TransactionsSlider navigation={navigation} />
    <ActionButton
      iconName="add"
      onPress={() => navigation.navigate(screens.TransactionEditor)}
    />
  </ScreenWrapper>
);

Transactions.propTypes = {
  navigation: PropTypes.object,
};

Transactions.navigationOptions = ({ navigation }) => ({
  title: 'Transactions',
  header: <TransactionsHeaderContainer navigation={navigation} />,
});

export default Transactions;
