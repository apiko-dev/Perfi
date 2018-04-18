import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View } from 'react-native';
import {
  AccountHeaderTrigger,
  AccountItem,
  DateIntervalSelector,
  DrawerButton,
  HeaderIcon,
  Selector,
} from '../../../components';
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
    isChartShown,
    onToggleChart,
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
      <HeaderIcon
        name={isChartShown ? 'format-list-bulleted' : 'chart-arc'}
        onPress={onToggleChart}
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
  isChartShown: PropTypes.bool,
  onToggleChart: PropTypes.func,
};

export default TransactionsHeader;
