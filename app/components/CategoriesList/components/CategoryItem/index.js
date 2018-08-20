import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { pure } from 'recompose';
import { RoundIcon, TouchableItem } from '../../../index';
import s from './styles';

import { colors } from '../../../../styles';


const CategoryItem = ({
  item,
  onSelect,
}) => (
  <TouchableItem
    style={s.container}
    onPress={() => onSelect(item)}
  >
    <View style={s.icon}>
      <RoundIcon
        name={item.icon}
        border={s.border}
        backgroundColor={colors.white}
        tintColor={colors.greyDarker}
      />
    </View>
    <View style={s.mainContentContainer}>
      <Text style={s.title}>{item.name}</Text>
    </View>
  </TouchableItem>
);

CategoryItem.propTypes = {
  item: T.object,
  onSelect: T.func,

};

export default pure(CategoryItem);

