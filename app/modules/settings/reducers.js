import { handleActions } from 'redux-actions';
import types from './types';
import currencies from '../../constants/currencies';


const initialState = {
  currency: currencies.dollar,
};

const transfersReducer = handleActions({
  [types.CHANGE_CURRENCY]: (state, { payload }) => ({
    ...state,
    currency: payload,
  }),
}, initialState);

export default transfersReducer;
