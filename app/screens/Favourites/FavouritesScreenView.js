import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import {
  Subtitle,
  DateFilter,
  FlatList,
  TransactionItem,
} from '../../components';
import s from './styles';

const _renderItem = onDeleteFromFavourites => ({
  item: { account, category, date, value, id },
}) => (
  <TransactionItem
    accountId={account}
    categoryId={category}
    date={date}
    value={value}
    onDelete={() => onDeleteFromFavourites(id)}
  />
  );

const Favourites = ({
  data,
  onDeleteFromFavourites,
  dateForFiltering,
  setDateForFiltering,
  setListRef,
}) => (
  <View style={s.root}>
    <DateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={setDateForFiltering}
    />
    <Subtitle
      style={s.subtitle}
      leftText="Favourites"
    />
    <FlatList
      data={data}
      renderItem={_renderItem(onDeleteFromFavourites)}
      listEmptyText="You don't have any favourites"
      flatListRef={setListRef}
    />
  </View>
  );

Favourites.propTypes = {
  data: T.array,
  onDeleteFromFavourites: T.func,
  setDateForFiltering: T.func,
  dateForFiltering: T.object,
  setListRef: T.func,
};


export default Favourites;
