import React from 'react';
import { Platform, View } from 'react-native';
import DrawerButton from '../DrawerButton';
import AccountSelector from './AccountSelector';
import styles from '../../styles/TransactionsHeaderStyles';

const TransactionsHeader = (props) => {
  const { navigation, accounts, currentAccount = accounts[0], onSelectAccount } = props;

  return (
    <View style={styles.rootStyle}>
      {Platform.OS === 'android' && (
        <DrawerButton navigation={navigation} />
      )}
      <AccountSelector
        accounts={accounts}
        currentAccount={currentAccount}
        onSelectAccount={onSelectAccount}
      />
    </View>
  );
};

TransactionsHeader.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default TransactionsHeader;
