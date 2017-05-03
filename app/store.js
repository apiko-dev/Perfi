import { createStore, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import devToolsEnhancer from 'remote-redux-devtools';
import { AsyncStorage } from 'react-native';
import appReducer from './reducers';

const enhancer = compose(
  devToolsEnhancer({ realtime: true }),
  autoRehydrate(),
);

const store = createStore(
  appReducer,
  undefined,
  enhancer,
);

persistStore(store, { storage: AsyncStorage });

export default store;
