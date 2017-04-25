import * as types from '../constants/actionTypes';
import { clearForm } from './accountActions';

export function createAccount(accountData) {
  return (dispatch) => {
    dispatch(clearForm());
    dispatch({
      type: types.CREATE_ACCOUNT,
      payload: accountData,
    });
  };
}

export function updateAccount(id, data) {
  return {
    type: types.UPDATE_ACCOUNT,
    payload: { id, data },
  };
}

export function deleteAccount(id) {
  return {
    type: types.DELETE_ACCOUNT,
    payload: id,
  };
}
