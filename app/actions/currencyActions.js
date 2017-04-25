import * as types from '../constants/actionTypes';

export function updateCurrency(currency) {
  return {
    type: types.CHANGE_DEFAULT_CURRENCY,
    payload: currency,
  };
}
