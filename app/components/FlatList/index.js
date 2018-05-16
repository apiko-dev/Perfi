import React from 'react';
import { FlatList as List, Text, View } from 'react-native';
import s from './styles';
import Separator from '../Separator';

const _keyExtractor = item => item.id;

const FlatList = ({ listEmptyText, flatListRef, data, ...props }) => (
      <List
        style={s.list}
        data={data}
        keyExtractor={_keyExtractor}
        ListHeaderComponent={Separator}
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
