import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import categories from './categoriesReducer';
import transactions from './transactionsReducer';
import transfers from './transfersReducer';
import navigator from './navigatorReducer';

const appReducer = combineReducers({
  accounts,
  categories,
  transactions,
  transfers,
  navigator,
});

export default appReducer;
