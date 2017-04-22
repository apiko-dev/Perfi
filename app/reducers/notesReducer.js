import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { insert, update, remove } from '../utils/mapHelper';

const createNote = ({ text }) => ({ text });

const initialState = {};

const notesReducer = handleActions({
  [actionTypes.CREATE_NOTE]: (state, { payload }) => insert(state, createNote(payload)),
  [actionTypes.UPDATE_NOTE]: (state, { payload }) => update(state, payload._id, payload),
  [actionTypes.DELETE_NOTE]: (state, { payload }) => remove(state, payload),
}, initialState);

export default notesReducer;
