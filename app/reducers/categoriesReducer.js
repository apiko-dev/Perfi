import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import defaultCategories from '../constants/defaultCategories';
import { newItem, addItem, updateItem, deleteItem } from '../utils/listHandler';

const createCategory = ({ name, icon, type }) => ({ name, icon, type });

const initialState = defaultCategories.map(props => newItem(createCategory, props));

const categoriesReducer = handleActions({
  [actionTypes.CREATE_CATEGORY]: (state, { payload }) => addItem(state, createCategory, payload),
  [actionTypes.UPDATE_CATEGORY]: (state, { payload }) => updateItem(state, payload._id, payload),
  [actionTypes.DELETE_CATEGORY]: (state, { payload }) => deleteItem(state, payload),
}, initialState);

export default categoriesReducer;
