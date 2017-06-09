import React, { PropTypes } from 'react';
import { Platform, View } from 'react-native';
import { Icon } from 'react-native-elements';
import DrawerButton from '../../../components/DrawerButton';
import Selector from '../../../components/Selector';
import { AccountHeaderTrigger, AccountItem, DateIntervalSelector } from '../../../components';
import styles from './TransactionsHeaderStyles';
import appStyles from '../../../styles/AppStyles';

const TransactionsHeader = (props) => {
  const {
    navigation,
    accounts,
    currentAccount = accounts[0],
    onSelectAccount,
    currentInterval,
    onSelectInterval,
  } = props;

  return (
    <View style={[styles.rootStyle, appStyles.headerStyle]}>
      {Platform.OS === 'android' && (
        <DrawerButton navigation={navigation} />
      )}
      <Selector
        options={accounts}
        currentOption={currentAccount}
        optionRenderer={AccountItem}
        triggerRenderer={AccountHeaderTrigger}
        onSelect={onSelectAccount}
      />
      <DateIntervalSelector
        currentInterval={currentInterval}
        onSelect={onSelectInterval}
      />
      <Icon
        iconStyle={appStyles.headerIconStyle}
        name="chart-arc"
        type="material-community"
      />
    </View>
  );
};

TransactionsHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  accounts: PropTypes.array,
  currentAccount: PropTypes.object,
  onSelectAccount: PropTypes.func,
  currentInterval: PropTypes.string,
  onSelectInterval: PropTypes.func,
};

export default TransactionsHeader;
