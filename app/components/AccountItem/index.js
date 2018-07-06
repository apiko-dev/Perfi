import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes, Image } from 'react-native';
import { Text, TouchableItem, Value } from '../../components';
import { fontSizes } from '../../styles';
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

const addAccount = require('../../assets/images/add-account.png');

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
    useForeground
    onPress={() => onPress(accountId)}
    style={[s.container, containerStyle]}
    {...props}
  >
    <View
      style={[
        s.accountContainer,
        style,
        !isAddButton && { backgroundColor: color },
      ]}
    >
      {isAddButton ?
        <Image
          style={s.image}
          resizeMode="stretch"
          source={addAccount}
        />
        :
        <View>
          {balance > 9999999 ?
            <Text style={s.toLargeText}>Oops, too large money to display it 😁</Text>
            :
            <Value
              style={[s.value, { fontSize: calcValueSize(Math.round(balance)) }]}
              containerStyle={s.valueContainer}
              value={Math.round(balance)}
              withoutPlus
            />
        }
        </View>
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
