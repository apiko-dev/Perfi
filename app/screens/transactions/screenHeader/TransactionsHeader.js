import React, { PropTypes } from 'react';
import { Platform, Text, View } from 'react-native';
import DrawerButton from '../../../components/DrawerButton';
import Selector from '../../../components/Selector';
import { AccountItem } from '../../../components';
import styles from './TransactionsHeaderStyles';

const IntervalItem = name => <Text>{name}</Text>;

const TransactionsHeader = (props) => {
  const {
    navigation,
    accounts,
    currentAccount = accounts[0],
    onSelectAccount,
    intervals,
    currentInterval = intervals[0],
    onSelectInterval,
  } = props;

  return (
    <View style={styles.rootStyle}>
      {Platform.OS === 'android' && (
        <DrawerButton navigation={navigation} />
      )}
      <Selector
        options={accounts}
        currentOption={currentAccount}
        optionRenderer={AccountItem}
        onSelect={onSelectAccount}
      />
      <Selector
        options={intervals}
        currentOption={currentInterval}
        optionRenderer={IntervalItem}
        onSelect={onSelectInterval}
      />
    </View>
  );
};

TransactionsHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  accounts: PropTypes.array,
  currentAccount: PropTypes.object,
  onSelectAccount: PropTypes.func,
  intervals: PropTypes.array,
  currentInterval: PropTypes.string,
  onSelectInterval: PropTypes.func,
};

export default TransactionsHeader;
