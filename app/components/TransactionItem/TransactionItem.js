import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { NavIcon, RoundIcon } from '../index';
import s from './styles';
import { dateWithTime } from '../../utils/dateHelpers';
import { colors } from '../../styles/index';

const ButtonView = ({ name }) => ( // eslint-disable-line
  <View style={s.buttonIcon}>
    <NavIcon name={name} tintColor={colors.white} />
  </View>
);

const TransactionItem = ({
  isSimpleItem,
  date,
  value,
  accountName,
  accountColor,
  categoryIconName,
  categoryName,
  onDelete,
  isFavourites,
  onAddToFavourite,
  onDeleteFromFavourites,
  percent,
  onAllowScroll,
  isIncome,
}) => {
  const swipeoutBtns = {
    right: onDelete ? [{
      backgroundColor: colors.red,
      onPress: onDelete,
      component: <ButtonView name="trash" />,
    }] : undefined,
    left: onAddToFavourite ? [{
      backgroundColor: isFavourites ? colors.yellow : colors.grey,
      onPress: isFavourites ? onDeleteFromFavourites : onAddToFavourite,
      component: <ButtonView name="star" />,
    }] : undefined,
  };

  return (<View>
    {isSimpleItem ?
      <View style={s.container}>
        <View style={s.icon}>
          <RoundIcon
            name={categoryIconName}
            backgroundColor={value > 0 ? colors.green : colors.red}
          />
        </View>
        <View style={s.mainContentContainer}>
          <Text style={s.title}>{categoryName}</Text>
        </View>
        <View style={s.value}>
          <Text style={[s.valueText, value > 0 ? s.incomeColor : s.expenseColor]}>
            {value > 0 ? `+ $${value}` : `- $${value.toString()
            .substr(1)}`}
          </Text>
          <Text style={s.percentText}> / {percent}%</Text>
        </View>
      </View>
      :
      <Swipeout
        {...swipeoutBtns}
        sensitivity={0}
        autoClose
        scroll={onAllowScroll}
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
            <Text style={[s.valueText, isIncome ? s.incomeColor : s.expenseColor]}>
              {isIncome ? `+ $${value}` : value === 0 ?
                `- $${value}` : `- $${value.toString().substr(1)}`}
            </Text>
          </View>
        </View>
      </Swipeout>
    }

  </View>);
};

TransactionItem.propTypes = {
  date: T.object,
  value: T.number,
  percent: T.number,
  accountName: T.string,
  accountColor: T.string,
  categoryIconName: T.string,
  categoryName: T.string,
  onDelete: T.func,
  onAddToFavourite: T.func,
  onDeleteFromFavourites: T.func,
  onAllowScroll: T.func,
  isFavourites: T.bool,
  isSimpleItem: T.bool,
  isIncome: T.bool,
};

export default TransactionItem;

