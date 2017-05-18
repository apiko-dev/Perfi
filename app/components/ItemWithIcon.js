import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const ItemWithIcon = ({ icon, iconStyle, title, titleStyle }) => (
  <View style={{ flexDirection: 'row' }}>
    <Icon
      name={icon}
      iconStyle={iconStyle}
      type="material-community"
    />
    <Text>{title}</Text>
  </View>
);

export default ItemWithIcon;