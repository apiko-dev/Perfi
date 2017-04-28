import * as types from '../constants/actionTypes';

export function updateData(fieldObject) {
  return {
    type: types.UPDATE_ACCOUNT_FIELD,
    payload: fieldObject,
  };
}

export function hideModal() {
  return {
    type: types.HIDE_MODAL,
  };
}

export function showModal() {
  return {
    type: types.SHOW_MODAL,
  };
}

export function clearForm() {
  return {
    type: types.CLEAR_ACCOUNT_FORM,
  };
}
