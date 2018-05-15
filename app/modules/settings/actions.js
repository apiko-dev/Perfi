import { createActions } from 'redux-actions';
import types from './types';

export const { changeCurrency } = createActions(
  types.CHANGE_CURRENCY,
);
