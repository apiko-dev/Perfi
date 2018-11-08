import { handleActions } from 'redux-actions';
import types from './types';
import mockData from './mockData';
import {
  insertWithUUID,
  insertAllWithUUID,
  update,
  remove,
  synchronize,
} from '../../utils/stateHelper';
import typesSettings from '../settings/types';
import { synchTypes } from '../synch';

const createTransaction = (props) => {
  const {
    value, account, category, date = new Date(), note, isFavourite = false,
  } = props;

  return {
    value, account, category, date, note, isFavourite,
  };
};

const initialState = {};

const transactionsReducer = handleActions({
  [types.CREATE_TRANSACTION]: (state, { payload }) => insertWithUUID(
    state,
    createTransaction(payload),
  ),
  [types.UPDATE_TRANSACTION]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRANSACTION]: (state, { payload }) => remove(state, payload),
  [types.GENERATE_MOCK_DATA]: (state) => insertAllWithUUID(state, mockData),
  [synchTypes.SYNCHRONIZATION_SUCCESS]: (state, { payload }) =>
    synchronize(state, payload.transactions),
  [typesSettings.RESET_DATA]: () => initialState,
}, initialState);

export default transactionsReducer;
