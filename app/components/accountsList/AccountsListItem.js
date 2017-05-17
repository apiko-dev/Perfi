import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from '../../styles/CategoriesListItemStyles';
import accountsListStyle from '../../styles/FormStyles';

const { listItemStyle, textStyle } = accountsListStyle;

const AccountsListItem = ({ name, icon, balance, style, ...props }) => (
  <ListItem
    containerStyle={[styles.rootStyle, style]}
    {...props}
    title={
      <View style={listItemStyle}>
        <Text style={textStyle}>{ name }</Text>
        <Text>{ balance }</Text>
      </View>
    }
    leftIcon={{
      name: icon,
      type: 'material-community',
    }}
    hideChevron
  />
);

AccountsListItem.propTypes = {
  style: PropTypes.any,
  name: PropTypes.string,
  icon: PropTypes.string,
  balance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default AccountsListItem;
