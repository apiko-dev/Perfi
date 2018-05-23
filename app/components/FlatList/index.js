import React from 'react';
import R from 'ramda';
import { FlatList as List, Text, View } from 'react-native';
import s from './styles';
import Separator from '../Separator';

// eslint-disable-next-line react/prop-types
const FlatList = ({ listEmptyText, flatListRef, data, ...props }) => (
  <List
    style={s.list}
    data={data}
    keyExtractor={R.prop('id')}
    ItemSeparatorComponent={Separator}
    ListEmptyComponent={<Text style={s.emptyText}>{listEmptyText}</Text>}
    ListFooterComponent={
          data.length ? <View style={s.paddingBottom}><Separator /></View> : null
        }
    ref={flatListRef}
    {...props}
  />
);

export default FlatList;
