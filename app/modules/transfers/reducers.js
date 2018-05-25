import { handleActions } from 'redux-actions';
import types from './types';
import { insert, update, remove, insertAll } from '../../utils/stateHelper';

//  {
//        {
//          "date": 2018-05-23T14:13:02.749Z,
//          "from": "3",
//          "id": "0",
//          "note": "342",
//          "to": "2",
//          "value": 16,
//        },
//  }

export const createTransfer = (props) => {
  const {
    value, from, to, date = new Date(), note, isFavourite = false,
  } = props;

  return {
    value, from, to, date, note, isFavourite,
  };
};

const defaultTransactions = [
  createTransfer({
    value: 30,
    from: '3',
    to: '1',
    note: 'Bla Bla Bla blalalalalla lal la l alalalala lal la lal la la la la la lal la la la l',
    isFavourite: true,
  }),
];


const initialState = insertAll({}, defaultTransactions);


const transfersReducer = handleActions({
  [types.CREATE_TRANSFER]: (state, { payload }) => insert(state, createTransfer(payload)),
  [types.UPDATE_TRANSFER]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRANSFER]: (state, { payload }) => remove(state, payload),
}, initialState);

export default transfersReducer;
