import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from '../IconsPickerModal/styles';
import IconsPickerItem from './IconsPickerListItem';

const { rowStyle } = styles;

const IconsPickerListRow = ({ row, onIconPick, selectedIconName }) => {
  const renderRowItem = name => (
    <IconsPickerItem
      key={name}
      onIconPress={onIconPick}
      name={name}
      isSelected={name === selectedIconName}
    />);

  return (
    <View style={rowStyle}>
      { row.map(renderRowItem) }
    </View>
  );
};

IconsPickerListRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string),
  onIconPick: PropTypes.func,
  selectedIconName: PropTypes.string,
};

export default IconsPickerListRow;
