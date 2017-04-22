import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import categories from './categoriesReducer';
import notes from './notesReducer';
import transactions from './transactionsReducer';
import transfers from './transfersReducer';
import navigator from './navigatorReducer';

const appReducer = combineReducers({
  accounts,
  categories,
  notes,
  transactions,
  transfers,
  navigator,
});

export default appReducer;
