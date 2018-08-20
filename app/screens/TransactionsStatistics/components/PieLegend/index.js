import React from 'react';
import R from 'ramda';
import T from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import s from './styles';


const PieLegend = ({ data, containerStyle }) => (
  <View style={[containerStyle, s.root]}>
    <FlatList
      data={data}
      centerContent
      renderItem={({ item }) => (
        <View style={s.container}>
          <View style={[s.circle, { backgroundColor: item.fill }]} />
          <View style={s.textContainer}>
            <Text style={[s.text]}>${item.y} - </Text>
            <Text style={[s.text]} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
          </View>
        </View>
        )}
      keyExtractor={R.prop('x')}
      ListEmptyComponent={<Text style={s.emptyText}>No statistics</Text>}
    />
  </View>
);

PieLegend.propTypes = {
  data: T.array,
  containerStyle: T.func,
};

export default PieLegend;
