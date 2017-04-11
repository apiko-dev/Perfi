import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './app/store';
import Navigator from './app/navigation/NavigatorViewContainer';
import styles from './app/styles/AppStyles';

class App extends Component {
  componentDidMount() {
    persistStore(store, { storage: AsyncStorage });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    );
  }
}

export default App;
