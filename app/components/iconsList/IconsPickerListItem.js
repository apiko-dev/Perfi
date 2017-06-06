import React, { PropTypes } from 'react';
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
