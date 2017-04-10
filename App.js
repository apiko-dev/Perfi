import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import Navigator from './app/navigation/NavigatorViewContainer';
import styles from './app/styles/AppStyles';

const App = () => (
  <View style={styles.containerStyle}>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </View>
);

export default App;
