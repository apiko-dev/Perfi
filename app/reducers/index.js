import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import navigator from './navigatorReducer';

const appReducer = combineReducers({
  accounts,
  navigator,
});

export default appReducer;
