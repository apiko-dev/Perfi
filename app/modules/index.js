import AsyncStorage from 'redux-persist/es/storage';
import { persistCombineReducers } from 'redux-persist';
import app from './app';
import accounts from './accounts';
import categories from './categories';
import transactions from './transactions';
import transfers from './transfers';
import navigator from './navigator';
import settings from './settings';


const config = {
  key: 'root',
  whitelist: [
    'settings',
    'accounts',
    'categories',
    'transactions',
    'transfers',
  ],
  storage: AsyncStorage,
};

const appReducer = {
  app,
  accounts,
  categories,
  transactions,
  transfers,
  navigator,
  settings,
};


export default persistCombineReducers(config, appReducer);
