import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import categories from './categoriesReducer';
import transactions from './transactionsReducer';
import transfers from './transfersReducer';
import navigator from './navigatorReducer';
import storage from './storageReducer';

const appReducer = combineReducers({
  accounts,
  categories,
  transactions,
  transfers,
  navigator,
  storage,
});

export default appReducer;
