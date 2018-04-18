import { createActions } from 'redux-actions';
import types from './types';

export const { createCategory, updateCategory, deleteCategory } = createActions(
  types.CREATE_CATEGORY,
  types.UPDATE_CATEGORY,
  types.DELETE_CATEGORY,
);

