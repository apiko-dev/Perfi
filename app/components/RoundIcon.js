import React from 'react';
import T from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CategoryIcon from './CategoryIcon';
import { colors, dimensions } from '../styles';


const styles = StyleSheet.create({
  circle: {
    borderRadius: (dimensions.iconSize + 15) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: dimensions.iconSize + 15,
    height: dimensions.iconSize + 15,
  },

});


const RoundIcon = ({ backgroundColor, tintColor = colors.white, border, ...props }) => (
  <View style={[styles.circle, { backgroundColor }, border]}>
    <CategoryIcon tintColor={tintColor} {...props} />
  </View>
);

RoundIcon.propTypes = {
  backgroundColor: T.string.isRequired,
  tintColor: T.string,
  border: T.any,
};

export default RoundIcon;
