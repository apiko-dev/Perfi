import { AsyncStorage } from 'react-native';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import devToolsEnhancer from 'remote-redux-devtools';
import appReducer from './reducers';

const enhancer = compose(
  devToolsEnhancer({ realtime: true }),
);

const store = createStore(
  appReducer,
  enhancer,
  autoRehydrate(),
);

const persistStoreConfig = {
  storage: AsyncStorage,
};

// persistStore(store, persistStoreConfig);

export default store;
