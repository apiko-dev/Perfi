import React from 'react';
import { View } from 'react-native';
import Navigator from './app/navigation';
import styles from './app/styles/AppStyles';

const App = () => (
  <View style={styles.containerStyle}>
    <Navigator />
  </View>
);

export default App;
