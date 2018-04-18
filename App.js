import React from 'react';
import { StatusBar, View } from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import { lifecycle } from 'recompose';
import store from './app/store';
import Navigator from './app/navigation/NavigatorContainer';
import styles from './app/styles/AppStyles';
import colors from './app/styles/colors';
import { appOperations } from './app/modules/app';

const App = () => (
  <MenuContext>
    <View style={styles.rootStyle}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  </MenuContext>
);

const enhance = lifecycle({
  componentDidMount() {
    store.dispatch(appOperations.loadAssets());
  },
});

export default enhance(App);
