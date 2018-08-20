import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import {
  Subtitle,
  DateFilter,
  FlatList,
  Separator,
  TransactionItem,
} from '../../components';
import s from './styles';


const Favourites = ({
  concatenatedData,
  onDeleteFromFavourites,
                      onGoToDetail,
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
    <Separator withShadow />
    <FlatList
      isSimpleEmptyText={!!concatenatedData.length}
      data={concatenatedData}
      renderItem={({ item }) =>
        <TransactionItem
          entity={item}
          onDelete={() => onDeleteFromFavourites({ id: item.id, isTransaction: !!item.account })}
          onPress={() => onGoToDetail({ id: item.id, isTransaction: !!item.account })}
        />
      }
      listEmptyText="You don't have any favourites"
      flatListRef={setListRef}
    />
  </View>
);

Favourites.propTypes = {
  concatenatedData: T.array,
  onDeleteFromFavourites: T.func,
  onGoToDetail: T.func,
  setDateForFiltering: T.func,
  dateForFiltering: T.object,
  setListRef: T.func,
};


export default Favourites;
