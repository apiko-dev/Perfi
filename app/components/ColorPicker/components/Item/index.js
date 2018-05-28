import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import T from 'prop-types';

import s from './styles';
import { Icon } from '../../../index';
import { moderateScale } from '../../../../styles/scalingUtils';

const Item = ({ color, isSelected, onPress, ...props }) => (
  <TouchableOpacity
    style={[
      s.item,
      isSelected && s.isSelected,
      { backgroundColor: color },
    ]}
    onPress={() => onPress(color)}
    {...props}
  >
    {isSelected &&
    <View style={s.selectedItem}>
      <Icon
        fill="white"
        name="shape"
        height={moderateScale(15)}
        width={moderateScale(15)}
      />
    </View>
    }
  </TouchableOpacity>
);

Item.propTypes = {
  color: T.string,
  onPress: T.func,
  isSelected: T.bool,
};

export default Item;
