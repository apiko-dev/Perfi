import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Text, NavIcon, TouchableItem, Value } from '../../components';
import { colors, fontSizes } from '../../styles';
import s from './styles';

const calcValueSize = value => {
  const length = value.toString().length;
  if (length > 8) return fontSizes.verySmall - 2;
  if (length === 8) return fontSizes.verySmall;
  if (length === 7) return fontSizes.small;
  if (length === 6) return fontSizes.medium;
  if (length === 5) return fontSizes.xmedium;
  if (length === 4) return fontSizes.xxmedium;
  return fontSizes.big;
};


const calSubTitle = val => fontSizes.verySmall - (val.length > 12 ? (val.length - 12) / 1.5 : 0);

const AccountItem = ({
  accountId,
  name,
  style,
  containerStyle,
  color,
  isAddButton,
  onPress,
  balance,
  ...props
}) => (
  <TouchableItem
    onPress={() => onPress(accountId)}
    style={[s.container, containerStyle]}
    {...props}
  >
    <View
      style={[
        s.accountContainer,
        style,
        isAddButton ? s.addButtonContainer : { backgroundColor: color },
      ]}
    >
      {isAddButton ?
        <NavIcon
          name="plus"
          size={40}
          tintColor={colors.greyDarker}
        />
        :
        <Value
          style={[s.value, { fontSize: calcValueSize(balance) }]}
          containerStyle={s.valueContainer}
          value={balance}
          withoutPlus
        />
      }
      <View style={s.subtitleContainer}>
        <Text
          style={isAddButton ? s.addButtonSubtitle : [s.subtitle, { fontSize: calSubTitle(name) }]}
        >
          {name}
        </Text>
      </View>
    </View>

  </TouchableItem>
);

AccountItem.propTypes = {
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  name: T.string,
  accountId: T.string,
  balance: T.number,
  color: T.string,
  onPress: T.func,
  isAddButton: T.bool,
};

export default AccountItem;
