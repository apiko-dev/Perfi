import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles/ItemWithIconStyles';

const ItemWithIcon = ({ icon, iconStyle, title, titleStyle }) => (
  <View style={styles.rootStyle}>
    <Icon
      name={icon}
      iconStyle={[styles.iconStyle, iconStyle]}
      type="material-community"
    />
    <Text>{title}</Text>
  </View>
);

export default ItemWithIcon;