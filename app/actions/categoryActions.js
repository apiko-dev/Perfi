import { createActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

export const { createCategory, updateCategory, deleteCategory } = createActions(
  actionTypes.CREATE_CATEGORY,
  actionTypes.UPDATE_CATEGORY,
  actionTypes.DELETE_CATEGORY,
);
