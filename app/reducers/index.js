import { combineReducers } from 'redux';
import navigator from './navigatorReducer';

const appReducer = combineReducers({
  navigator,
});

export default appReducer;
