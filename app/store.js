import { autoRehydrate, persistStore } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import { AsyncStorage } from 'react-native';
import appReducer from './reducers';

const enhancer = compose(
  autoRehydrate(),
  devToolsEnhancer({ realtime: true }),
  applyMiddleware(thunk),
);

const store = createStore(
  appReducer,
  undefined,
  enhancer,
);

persistStore(store, { storage: AsyncStorage });

export default store;
