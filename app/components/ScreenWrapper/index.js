import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { dimensions, colors } from '../../styles';

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    padding: dimensions.indent,
    backgroundColor: colors.white,
  },
});

const ScreenWrapper = ({ children, style }) => (
  <View style={[styles.rootStyle, style]}>
    { children }
  </View>
);

ScreenWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  style: PropTypes.any,
};

export default ScreenWrapper;
