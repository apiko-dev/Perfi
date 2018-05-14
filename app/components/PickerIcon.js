import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { dimensions, colors } from '../styles';

const styles = StyleSheet.create({
  iconStyle: {
    color: colors.textPrimary,
  },
  containerStyle: {
    margin: 0,
    backgroundColor: colors.secondaryText,
  },
});

const PickerIcon = props => (
  <Icon
    type="material-community"
    iconStyle={styles.iconStyle}
    containerStyle={styles.containerStyle}
    size={dimensions.iconSize}
    raised
    {...props}
  />
);

export default PickerIcon;
