import React from 'react';
import { Platform, Text, View } from 'react-native';
import DrawerButton from '../DrawerButton';
import Selector from '../Selector';
import ItemWithIcon from '../ItemWithIcon';
import styles from '../../styles/TransactionsHeaderStyles';

const AccountItem = ({ name, icon }) => <ItemWithIcon title={name} icon={icon} />;

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
  navigation: React.PropTypes.object.isRequired,
};

export default TransactionsHeader;
