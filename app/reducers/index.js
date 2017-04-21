import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import categories from './categoriesReducer';
import navigator from './navigatorReducer';

const appReducer = combineReducers({
  accounts,
  categories,
  navigator,
});

export default appReducer;
