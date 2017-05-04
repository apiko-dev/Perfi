import { handleActions } from 'redux-actions';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = { isReady: false };

const transfersReducer = handleActions({
  [REHYDRATE]: () => ({ isReady: true }),
}, initialState);

export default transfersReducer;
