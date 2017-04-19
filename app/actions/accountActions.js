import * as types from '../constants/actionTypes';

export function updateData(fieldObject) {
  return {
    type: types.UPDATE_ACCOUNT_FIELD,
    payload: fieldObject,
  }
}

export function createSuccess() {
  return {
    type: types.CREATE_ACCOUNT_SUCCESS,
  }
}
