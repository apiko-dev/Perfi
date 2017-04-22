import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import categories from './categoriesReducer';
import notes from './notesReducer';
import navigator from './navigatorReducer';

const appReducer = combineReducers({
  accounts,
  categories,
  notes,
  navigator,
});

export default appReducer;
