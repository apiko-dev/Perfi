import React, { PropTypes } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/AccountsStyles';

const { listItemStyle, textStyle } = styles;

const AccountsListItem = ({ name, icon, initialBalance, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={listItemStyle}>
      <MaterialIcons name={icon} size={26} />
      <Text style={textStyle}>{ name }</Text>
      <Text>{ initialBalance }</Text>
    </View>
  </TouchableWithoutFeedback>
);

AccountsListItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  initialBalance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onPress: PropTypes.func,
};

export default AccountsListItem;
