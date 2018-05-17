import { handleActions } from 'redux-actions';
import types from './types';
import { insert, update, remove } from '../../utils/stateHelper';

const createTransfer = (props) => {
  const {
    value, from, to, date = new Date(), note,
  } = props;

  return {
    value, from, to, date, note,
  };
};

const initialState = {};

const transfersReducer = handleActions({
  [types.CREATE_TRANSFER]: (state, { payload }) => insert(state, createTransfer(payload)),
  [types.UPDATE_TRANSFER]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRANSFER]: (state, { payload }) => remove(state, payload),
}, initialState);

export default transfersReducer;
