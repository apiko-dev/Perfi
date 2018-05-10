import { createSelector } from 'reselect';
import R from 'ramda';

const getCategoriesIds = catrgories => R.pathOr([], ['ids'], catrgories);
export const getCategoriesEntities = catrgories => R.pathOr({}, ['byId'], catrgories);


export const getIncomeCategory = createSelector(
  [
    getCategoriesIds,
    getCategoriesEntities,
  ],

  (ids, entities) => {
    const newArr = [];
    ids.forEach((id) => {
      if (entities[id].type === 'Income') {
        newArr.push(entities[id]);
      }
    });
    return newArr;
  },
);


export const getExpenseCategory = createSelector(
  [
    getCategoriesIds,
    getCategoriesEntities,
  ],

  (ids, entities) => {
    const newArr = [];
    ids.forEach((id) => {
      if (entities[id].type === 'Expense') {
        newArr.push(entities[id]);
      }
    });
    return newArr;
  },
);
