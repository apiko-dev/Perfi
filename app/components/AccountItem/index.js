import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes, TouchableOpacity } from 'react-native';
import { Text, NavIcon } from '../../components';
import { colors } from '../../styles';
import s from './styles';


const AccountItem = ({
   name,
   style,
   containerStyle,
   color,
   isAddButton,
   onPress,
   initialBalance,
   ...props
}) => (

  <TouchableOpacity
    onPress={onPress}
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
        <Text style={s.title}>{initialBalance}$</Text>}
      <View style={s.subtitleContainer}>
        <Text style={isAddButton ? s.addButtonSubtitle : s.subtitle}>{name}</Text>
      </View>
    </View>

  </TouchableOpacity>


);

AccountItem.propTypes = {
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  name: T.string,
  initialBalance: T.number,
  color: T.string,
  onPress: T.func,
  isAddButton: T.bool,
};

export default AccountItem;
