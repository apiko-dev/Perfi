import { createActions } from 'redux-actions';
import types from './types';

export const { changeCurrency, signIn, generateMockData } = createActions(
  types.CHANGE_CURRENCY,
  types.SIGN_IN,
  types.GENERATE_MOCK_DATA,
);
