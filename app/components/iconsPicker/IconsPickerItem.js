import React, { PropTypes } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/IconsPickerStyles';

const { iconContainerStyle, pickedItemStyle } = styles;

const IconsPickerItem = ({ name, isSelected, onIconPress }) => {
  const iconStyle = [iconContainerStyle, isSelected && pickedItemStyle];

  return (
    <TouchableWithoutFeedback
      key={name}
      onPress={() => onIconPress(name)}
    >
      <View style={iconStyle}>
        <MaterialCommunityIcons
          name={name}
          size={26}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

IconsPickerItem.propTypes = {
  name: PropTypes.string,
  isSelected: PropTypes.bool,
  onIconPress: PropTypes.func,
};

export default IconsPickerItem;
