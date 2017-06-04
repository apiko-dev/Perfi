import React, { PropTypes } from 'react';
import { Platform, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import DrawerButton from '../../../components/DrawerButton';
import Selector from '../../../components/Selector';
import { AccountHeaderTrigger, AccountItem, NavIcon, TextWithIcons } from '../../../components';
import styles from './TransactionsHeaderStyles';
import appStyles from '../../../styles/AppStyles';

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const IntervalItem = name => <Text>{capitalizeFirstLetter(name)}</Text>;

const IntervalTrigger = (name) => (
  <TextWithIcons
    containerStyle={{ marginRight: 10 }}
    text={capitalizeFirstLetter(name)}
    textStyle={{ fontSize: 16 }}
    rightIcon="menu-down"
    color="white"
  />
);

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
      <Selector
        options={intervals}
        currentOption={currentInterval}
        optionRenderer={IntervalItem}
        triggerRenderer={IntervalTrigger}
        onSelect={onSelectInterval}
      />
      <Icon
        name="chart-arc"
        type="material-community"
        color="white"
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
