import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from 'react-native-elements';
import styles from '../styles/FormStyles';
import selectStyles from '../styles/SelectBoxStyles';

const { itemWrapperStyle, itemTextStyle } = selectStyles;

const SelectBox = ({ onValueChange, selectedValue, getLabel, items, withIcon, getIcon, style }) => {
  const getItem = (value) => {
    const label = getLabel(value);
    const icon = getIcon(value);

    return (
      <View style={itemWrapperStyle}>
        {withIcon && icon && <Icon
          name={icon}
          type="material-community"
        />}
        <Text style={itemTextStyle}>{ label }</Text>
      </View>
    );
  };

  const getListItem = value => (
    <MenuOption
      key={getLabel(value)}
      value={value}
    >
      { getItem(value) }
    </MenuOption>
  );

  return (
    <Menu
      onSelect={onValueChange}
      style={styles.dropDownMenuStyle}
    >
      <MenuTrigger style={style}>
        { getItem(selectedValue) }
      </MenuTrigger>
      <MenuOptions>
        { items.map(getListItem) }
      </MenuOptions>
    </Menu>
  );
};

SelectBox.propTypes = {
  onValueChange: PropTypes.func,
  selectedValue: PropTypes.object,
  getLabel: PropTypes.func,
  items: PropTypes.array,
  withIcon: PropTypes.bool,
  getIcon: PropTypes.func,
  style: PropTypes.any,
};

export default SelectBox;
