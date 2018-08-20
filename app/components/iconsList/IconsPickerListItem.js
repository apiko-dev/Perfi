import React from 'react';
import PropTypes from 'prop-types';
import styles from '../IconsPickerModal/styles';
import BigRoundIconButton from '../BigRoundIconButton';
import { colors } from '../../styles';

const IconsPickerItem = ({ name, isSelected, onIconPress }) => (
  <BigRoundIconButton
    name={name}
    border={{ borderColor: isSelected ? colors.green : colors.greyDarker }}
    onPress={() => onIconPress(name)}
    containerStyle={styles.iconStyle}
    tintColor={isSelected ? colors.green : colors.greyDarker}
  />
);

IconsPickerItem.propTypes = {
  name: PropTypes.string,
  isSelected: PropTypes.bool,
  onIconPress: PropTypes.func,
};

export default IconsPickerItem;
