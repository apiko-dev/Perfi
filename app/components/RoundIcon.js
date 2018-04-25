import React from 'react';
import T from 'prop-types';
import { StyleSheet, View } from 'react-native';
import NavIcon from './NavIcon';
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


const RoundIcon = ({ backgroundColor, tintColor = colors.white, ...props }) => (
  <View style={[styles.circle, { backgroundColor }]}>
    <NavIcon tintColor={tintColor} {...props} />
    </View>
);

RoundIcon.propTypes = {
  backgroundColor: T.string.isRequired,
  tintColor: T.string,
};

export default RoundIcon;
