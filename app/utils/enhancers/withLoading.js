import React from 'react';
import { StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native';
import { colors } from '../../styles';

const s = StyleSheet.create({
  root: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

export default (propName = 'isLoading') => BaseComponent => props => (
  props[propName]
    ? (
      <View style={[s.root]}>
        <ActivityIndicator size="large" />
      </View>
    )
    : <BaseComponent {...props} />
);
