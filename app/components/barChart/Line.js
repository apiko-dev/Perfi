import React from 'react';
import { View } from 'react-native';
import styles from './LineStyles';

const Line = i => (
  <View
    style={styles.stripeStyle}
    key={i}
  />
);

export default Line;
