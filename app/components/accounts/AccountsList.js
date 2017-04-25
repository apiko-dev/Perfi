import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const AccountsList = ({ accounts }) => {
  const getListItems = () => accounts.map(item => (<Text key={item.id}>
    { item.name }
  </Text>));

  return (<View>{ getListItems() }</View>);
};

AccountsList.propTypes = {
  accounts: PropTypes.array,
};

export default AccountsList;
