import * as types from '../constants/actionTypes';

export function createAccount(accountData) {
  return {
    type: types.CREATE_ACCOUNT,
    payload: accountData,
  }
}

export function updateAccount(id, data) {
  return {
    type: types.CREATE_ACCOUNT,
    payload: { id, data },
  }
}

export function deleteAccount(id) {
  return {
    type: types.CREATE_ACCOUNT,
    payload: id,
  }
}
