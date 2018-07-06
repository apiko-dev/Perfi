import { handleActions } from 'redux-actions';
import types from './types';
import currencies from '../../constants/currencies';


const initialState = {
  currency: currencies.dollar,
  isSignedIn: false,
};

const settingsReducer = handleActions({
  [types.CHANGE_CURRENCY]: (state, { payload }) => ({
    ...state,
    currency: payload,
  }),
  [types.SIGN_IN]: state => ({
    ...state,
    isSignedIn: true,
  }),
}, initialState);

export default settingsReducer;
