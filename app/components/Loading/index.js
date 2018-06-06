import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { CircleSnail } from 'react-native-progress';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loading = ({
  size, color = colors.defaultPrimary, thickness, containerStyle,
}) => (
  <View style={[styles.rootStyle, containerStyle]}>
    <CircleSnail
      size={size}
      color={color}
      thickness={thickness}
    />
  </View>
);

Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  thickness: PropTypes.number,
  containerStyle: PropTypes.oneOfType([PropTypes.object, ViewPropTypes.style]),
};

export default Loading;
