import { autoRehydrate, persistStore } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import { AsyncStorage } from 'react-native';
// import appReducer from './reducers';
import reducer from './modules';


const enhancer = compose(
  autoRehydrate(),
  applyMiddleware(thunk),
  devToolsEnhancer({ realtime: true }),
);

const store = createStore(
  reducer,
  undefined,
  enhancer,
);

persistStore(store, { storage: AsyncStorage }).purge();

export default store;
