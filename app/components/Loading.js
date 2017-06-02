import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { CircleSnail } from 'react-native-progress';

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loading = ({ size, color, thickness, containerStyle }) => (
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
  containerStyle: PropTypes.oneOfType([PropTypes.object, View.propTypes.style]),
};

export default Loading;
