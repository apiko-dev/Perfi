import { createActions } from 'redux-actions';
import types from './types';

export const { changeCurrency, signIn } = createActions(
  types.CHANGE_CURRENCY,
  types.SIGN_IN,
);
