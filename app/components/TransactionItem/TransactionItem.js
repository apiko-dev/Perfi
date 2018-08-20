import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { NavIcon, RoundIcon, Value, TouchableItem } from '../index';
import s from './styles';

import { dateWithTime } from '../../utils/dateHelpers';
import { colors } from '../../styles/index';

const ButtonView = ({ name }) => ( // eslint-disable-line
  <View style={s.buttonIcon}>
    <NavIcon name={name} tintColor={colors.white} />
  </View>
);

const TransactionItem = ({
  id,
  entity,
  isSimpleItem,
  accountName,
  accountColor,
  categoryIconName,
  categoryName,
  onDelete,
  isFavourite,
  onAddToFavourite,
  onDeleteFromFavourites,
  onPress,
  onAllowScroll,
  isTransfer,
  fromName,
  toName,
}) => {
  const swipeoutBtns = {
    right: onDelete ? [{
      backgroundColor: colors.red,
      onPress: onDelete,
      component: <ButtonView name="trash" />,
    }] : undefined,
    left: onAddToFavourite ? [{
      backgroundColor: isFavourite ? colors.yellow : colors.grey,
      onPress: isFavourite ? onDeleteFromFavourites : onAddToFavourite,
      component: <ButtonView name="star" />,
    }] : undefined,
  };

  return (<View key={id}>

    {isSimpleItem ?
      <TouchableItem onPress={onPress} style={s.container}>
        <View style={s.icon}>
          <RoundIcon
            name={categoryIconName}
            backgroundColor={entity.value > 0 ? colors.green : colors.red}
          />
        </View>
        <View style={s.mainContentContainer}>
          <Text style={s.title}>{entity.name}</Text>
        </View>
        <Value value={entity.value} >
          <Text style={s.percentText}> / {entity.percent}%</Text>
        </Value>
      </TouchableItem>
      :
      <Swipeout
        {...swipeoutBtns}
        sensitivity={20}
        autoClose
        scroll={onAllowScroll}
      >
        <TouchableItem onPress={onPress} style={s.container}>
          <View style={s.icon}>
            {isTransfer
              ? <RoundIcon name="shuffle-disabled" backgroundColor={colors.green} />
              : <RoundIcon name={categoryIconName} backgroundColor={accountColor} />
            }
          </View>
          <View style={s.mainContentContainer}>
            <Text style={s.title}>{isTransfer ? 'Transfer' : categoryName}</Text>
            <Text style={s.accountName}>
              {isTransfer ? `From ${fromName} ››› to ${toName}` : accountName}
            </Text>
            <Text style={s.date}>{dateWithTime(entity.date)}</Text>
          </View>
          <Value value={entity.value} isTransfer={isTransfer} />
        </TouchableItem>
      </Swipeout>
    }

  </View>);
};

TransactionItem.propTypes = {
  id: T.string,
  entity: T.object,
  accountName: T.string,
  accountColor: T.string,
  categoryIconName: T.string,
  categoryName: T.string,
  onDelete: T.func,
  onAddToFavourite: T.func,
  onDeleteFromFavourites: T.func,
  onPress: T.func,
  onAllowScroll: T.func,
  isFavourite: T.bool,
  isSimpleItem: T.bool,
  isTransfer: T.bool,
  fromName: T.string,
  toName: T.string,
};

export default TransactionItem;

