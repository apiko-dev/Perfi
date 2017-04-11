import { createStore, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
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

export default store;
