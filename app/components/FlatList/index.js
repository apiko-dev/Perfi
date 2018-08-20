import React from 'react';
import R from 'ramda';
import { FlatList as List, View, Text } from 'react-native';
import s from './styles';
import Separator from '../Separator';
import EmptyList from '../EmptyList';

// eslint-disable-next-line react/prop-types
const FlatList = ({ listEmptyText, flatListRef, data, isSimpleEmptyText, ...props }) => (
  <List
    contentContainerStyle={!isSimpleEmptyText && s.listContainer}
    style={s.list}
    data={data}
    keyExtractor={R.prop('id')}
    ItemSeparatorComponent={Separator}
    ListEmptyComponent={isSimpleEmptyText
      ? <Text style={s.emptyText}>{listEmptyText}</Text>
      : <EmptyList text={listEmptyText} />
    }
    ListFooterComponent={data.length ? <View style={s.paddingBottom}><Separator /></View> : null}
    ref={flatListRef}
    {...props}
  />
);

export default FlatList;
