import { combineReducers } from 'redux';
import navigator from './navigatorReducer';
import account from './accountReducer';
import accounts from './accountsReducer';
import defaultCurrency from './currencyReducer';

const appReducer = combineReducers({
  defaultCurrency,
  navigator,
  account,
  accounts,
});

export default appReducer;
