import React, { PropTypes } from 'react';
import { View } from 'react-native';
import screens from '../../constants/screens';
import { RoundButton } from '../../components';
import TransactionsHeaderContainer from './screenHeader/TransactionsHeaderContainer';
import TransactionsSlider from './TransactionsSlider';
import styles from '../../styles/DashboardStyles';

const Transactions = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <TransactionsSlider navigation={navigation} />
    <RoundButton
      style={styles.addButtonStyle}
      iconName="add"
      onPress={() => navigation.navigate(screens.TransactionEditor)}
    />
  </View>
);

Transactions.propTypes = {
  navigation: PropTypes.object,
};

Transactions.navigationOptions = ({ navigation }) => ({
  title: 'Transactions',
  header: <TransactionsHeaderContainer navigation={navigation} />,
});

export default Transactions;
