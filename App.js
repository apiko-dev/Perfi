import React from 'react';
import { StatusBar, View } from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import store from './app/store';
import Navigator from './app/navigation/NavigatorContainer';
import styles from './app/styles/AppStyles';
import colors from './app/styles/colors';

const App = () => (
  <MenuContext>
    <View style={styles.rootStyle}>
      <StatusBar
        statusBarStyle="light-content"
        backgroundColor={colors.darkPrimary}
      />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  </MenuContext>
);

export default App;
