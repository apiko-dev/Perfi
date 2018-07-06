import { createActions } from 'redux-actions';
import types from './types';

export const { changeCurrency, signIn, generateMockData, resetData } = createActions(
  types.CHANGE_CURRENCY,
  types.SIGN_IN,
  types.GENERATE_MOCK_DATA,
  types.RESET_DATA,
);
