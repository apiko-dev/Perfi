import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from '../styles/AppStyles';

const SceneContentWrapper = ({ children }) => (
  <View style={styles.sceneWrapperStyle}>
    { children }
  </View>
);

SceneContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};

export default SceneContentWrapper;
