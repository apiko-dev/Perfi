import { combineReducers } from 'redux';
import app from './app';
import accounts from './accounts';
import categories from './categories';
import storage from './storage';
import transactions from './transactions';
import transfers from './transfers';
import navigator from './navigator';
import settings from './settings';

const appReducer = combineReducers({
  app,
  accounts,
  categories,
  storage,
  transactions,
  transfers,
  navigator,
  settings,
});

export default appReducer;
