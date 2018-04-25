import { createSelector } from 'reselect';
import R from 'ramda';
import { inPeriod } from '../../utils/transactionsHelpers';


const getTransactionsIds = transactions => R.pathOr([], ['ids'], transactions);
const getTransactionsEntities = transactions => R.pathOr({}, ['byId'], transactions);
// export const getFilteringDate = date => date;
const getDateForFiltering = (_, dateForFiltering) => dateForFiltering;

export const getTransactions = createSelector(
[getTransactionsIds, getTransactionsEntities, getDateForFiltering],
  (ids, entities, date) => {
    const newArray = [];
    ids.forEach((id) => {
      const transaction = entities[id];
      const period = !date.format ?
        date : { from: +date.startOf('day'), to: +date.endOf('day') };
      if (inPeriod(period, transaction.date)) {
        newArray.push(transaction);
      }
    });

    return newArray;
  },
);
