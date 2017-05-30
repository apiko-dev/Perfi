import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
});

const ScreenWrapper = ({ children }) => (
  <View style={styles.rootStyle}>
    { children }
  </View>
);

ScreenWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};

export default ScreenWrapper;
