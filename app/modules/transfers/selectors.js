import { createSelector } from 'reselect';
import R from 'ramda';
import { inPeriod } from '../../utils/transactionsHelpers';

const getTransfersIds = state => R.pathOr([], ['transfers', 'ids'], state);
const getTransfersEntities = state => R.pathOr({}, ['transfers', 'byId'], state);
const getDateForFiltering = (_, props) => R.pathOr('', ['dateForFiltering'], props);
const getAccountId = (_, props) => R.pathOr('0', ['accountId'], props);


export const getTransfers = createSelector(
  [getTransfersIds, getTransfersEntities, getDateForFiltering],
  (ids, entities, date) => {
    const newArray = [];
    ids.forEach((id) => {
      const transfer = entities[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transfer.date)) {
        newArray.push(transfer);
      }
    });

    return newArray;
  },
);


export const getFavouritesTransfers = createSelector(
  [getTransfersIds, getTransfersEntities, getDateForFiltering],
  (ids, entities, date) => {
    const newArray = [];
    ids.forEach((id) => {
      const transfer = entities[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transfer.date) && transfer.isFavourite) {
        newArray.push(transfer);
      }
    });

    return newArray;
  },
);

export const getCurrentAccountTransfers = createSelector(
  [
    getTransfersIds,
    getTransfersEntities,
    getDateForFiltering,
    getAccountId,
  ],
  (ids, entities, date, accId) => {
    const newArray = [];
    ids.forEach((id) => {
      const transfer = entities[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transfer.date) && (transfer.from === accId || transfer.to === accId)) {
        newArray.push(transfer);
      }
    });
    return newArray;
  },
);
