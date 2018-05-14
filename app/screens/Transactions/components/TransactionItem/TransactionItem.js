import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { NavIcon, RoundIcon } from '../../../../components';
import s from './styles';

import { dateWithTime } from '../../../../utils/dateHelpers';
import { colors } from '../../../../styles';


const ButtonView = ({ name }) => ( // eslint-disable-line
  <View style={s.buttonIcon}>
    <NavIcon name={name} tintColor={colors.white} /></View>
);

const TransactionItem = ({
   date,
   value,
   accountName,
   accountColor,
   categoryIconName,
   categoryName,
   onDelete,
   onAddToFavourite,
}) => {
  const swipeoutBtns = {
    right: [{
      backgroundColor: colors.red,
      onPress: onDelete,
      component: <ButtonView name="trash" />,
    }],
    left: [{
      backgroundColor: colors.yellow,
      onPress: onAddToFavourite,
      component: <ButtonView name="star" />,
    }],
  };
  return (
    <Swipeout
      right={swipeoutBtns.right}
      left={swipeoutBtns.left}
      sensitivity={0}
      autoClose
    >
      <View style={s.container}>
        <View style={s.icon}>
          <RoundIcon name={categoryIconName} backgroundColor={accountColor} />
        </View>
        <View style={s.mainContentContainer}>
          <Text style={s.title}>{categoryName}</Text>
          <Text style={s.accountName}>{accountName}</Text>
          <Text style={s.date}>{dateWithTime(date)}</Text>
        </View>
        <View style={s.value}>
          <Text style={[s.valueText, value > 0 ? s.incomeColor : s.expenseColor]}>
            {value > 0 ? `+ $${value}` : `- $${value.toString().substr(1)}`}
          </Text>
        </View>
      </View>
    </Swipeout>
  );
};

TransactionItem.propTypes = {
  date: T.object,
  value: T.number,
  accountName: T.string,
  accountColor: T.string,
  categoryIconName: T.string,
  categoryName: T.string,
  onDelete: T.func,
  onAddToFavourite: T.func,
};

export default TransactionItem;

