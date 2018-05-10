import { createSelector } from 'reselect';
import R from 'ramda';

const getAccountsIds = accounts => R.pathOr([], ['ids'], accounts);
export const getAccountsEntities = accounts => R.pathOr({}, ['byId'], accounts);

export const getTotalBalance = createSelector(
  [
    getAccountsIds,
    getAccountsEntities,
  ],

  (ids, entities) => ids.reduce(
    (accumulator, currentValue) =>
      accumulator + R.pathOr(0, [currentValue, 'initialBalance'], entities), 0),
);

export const getAccounts = createSelector(
  [
    getAccountsIds,
    getAccountsEntities,
  ],

  (ids, entities) => ids.map(id => entities[id]),
);
