import React from 'react';
import { View } from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import store from './app/store';
import Navigator from './app/navigation/NavigatorViewContainer';
import styles from './app/styles/AppStyles';

const App = () => (
  <MenuContext>
    <View style={styles.containerStyle}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  </MenuContext>
);

export default App;
