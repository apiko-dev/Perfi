import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import styles from '../iconsPicker/IconsPickerStyles';

const IconsPickerItem = ({ name, isSelected, onIconPress }) => (
  <Icon
    key={name}
    iconStyle={[styles.iconStyle, isSelected && styles.pickedItemStyle]}
    name={name}
    type="material-community"
    onPress={() => onIconPress(name)}
  />
);

IconsPickerItem.propTypes = {
  name: PropTypes.string,
  isSelected: PropTypes.bool,
  onIconPress: PropTypes.func,
};

export default IconsPickerItem;
