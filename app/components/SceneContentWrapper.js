import React from 'react';
import { View } from 'react-native';
import styles from '../styles/AppStyles';

const SceneContentWrapper = ({ children }) => (<View style={styles.sceneWrapperStyle}>
  { children }
</View>);

export default SceneContentWrapper;
