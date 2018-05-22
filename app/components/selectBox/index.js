import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from 'react-native-elements';
import selectStyles from './SelectBoxStyles';

const { itemWrapperStyle, itemTextStyle, containerStyle } = selectStyles;

const SelectBox = ({
  onValueChange, selectedValue, getLabel, items, withIcon, getIcon, style,
}) => {
  const getItem = (value) => {
    const label = getLabel(value);
    const icon = withIcon && getIcon(value);

    return (
      <View style={itemWrapperStyle}>
        {icon && <Icon
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
    >
      <MenuTrigger style={[containerStyle, style]}>
        { getItem(selectedValue) }
        <Icon
          name="arrow-drop-down"
          type="material"
        />
      </MenuTrigger>
      <MenuOptions>
        { items.map(getListItem) }
      </MenuOptions>
    </Menu>
  );
};

SelectBox.propTypes = {
  onValueChange: PropTypes.func,
  selectedValue: PropTypes.any,
  getLabel: PropTypes.func,
  items: PropTypes.array,
  withIcon: PropTypes.bool,
  getIcon: PropTypes.func,
  style: PropTypes.any,
};

export default SelectBox;
