import { handleActions } from 'redux-actions';
import types from './types';
import { defaultCategories } from '../../constants/categories';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createCategory = ({ name, icon, type }) => ({ name, icon, type });

const initialState = insertAll({}, defaultCategories);

//    "byId": Object {
//        "0": Object {
//            "icon": "cash",
//              "id": "0",
//              "name": "Salary",
//              "type": "Income",
//            },
//     }
//    "ids": Array [ '1', '2', '3']


const categoriesReducer = handleActions({
  [types.CREATE_CATEGORY]: (state, { payload }) => insert(state, createCategory(payload)),
  [types.UPDATE_CATEGORY]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_CATEGORY]: (state, { payload }) => removeId(state, payload),
}, initialState);

export default categoriesReducer;
