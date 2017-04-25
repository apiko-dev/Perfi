import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './app/store';
import Navigator from './app/navigation/NavigatorViewContainer';
import styles from './app/styles/AppStyles';

class App extends Component {
  componentDidMount() {
    persistStore(store, { storage: AsyncStorage }).purge();
  }

  render() {
    return (
      <MenuContext>
        <View style={styles.containerStyle}>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </View>
      </MenuContext>
    );
  }
}

export default App;
