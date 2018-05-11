import { handleActions } from 'redux-actions';
import moment from 'moment';
import types from './types';
import { insert, insertAll, update, remove } from '../../utils/stateHelper';

const createTransaction = (props) => {
  const { value, account, category, date = new Date(), note } = props;

  return { value, account, category, date, note };
};


const defaultAccounts = [
  createTransaction({
    value: 10,
    account: '1',
    category: '1',
    date: moment().subtract(10, 'days'),
  }),
  createTransaction({
    value: 40,
    account: '2',
    category: '2',
    date: moment().subtract(4, 'days'),
  }),
  createTransaction({
    value: -30,
    account: '3',
    category: '3',
    date: moment().subtract(3, 'days'),
  }),
  createTransaction({
    value: 20,
    account: '1',
    category: '2',
    date: moment().subtract(2, 'days'),
  }),
  createTransaction({
    value: -100,
    account: '1',
    category: '3',
    date: moment().subtract(1, 'days'),
  }),
  createTransaction({
    value: 100,
    account: '2',
    category: '2',
    date: moment().subtract(1, 'days'),
  }),
  createTransaction({
    value: -100,
    account: '3',
    category: '6',
    date: moment().subtract(1, 'days'),
  }),
  createTransaction({
    value: -150,
    account: '1',
    category: '9',
    date: moment().subtract(1, 'days'),
  }),
  createTransaction({
    value: 3000,
    account: '2',
    category: '2',
    date: moment().subtract(1, 'days'),
  }),
  createTransaction({
    value: 250,
    account: '2',
    category: '1',
    date: moment().subtract(1, 'days'),
  }),
  createTransaction({
    value: 5100,
    account: '1',
    category: '1',
    date: moment().subtract(1, 'days'),
  }),

  createTransaction({ value: -100, account: '1', category: '7', date: new Date() }),
  createTransaction({ value: -99, account: '1', category: '7', date: new Date() }),
  createTransaction({ value: -100, account: '0', category: '3', date: new Date() }),
  createTransaction({ value: 50, account: '3', category: '0', date: new Date() }),
  createTransaction({ value: -40, account: '1', category: '3', date: new Date() }),
  createTransaction({ value: 30, account: '2', category: '2', date: new Date() }),
  createTransaction({ value: 600, account: '3', category: '1', date: new Date() }),
  createTransaction({ value: -360, account: '3', category: '3', date: new Date() }),
  createTransaction({ value: 760, account: '1', category: '2', date: new Date() }),
];

const initialState = insertAll({}, defaultAccounts);

const transactionsReducer = handleActions({
  [types.CREATE_TRANSACTION]: (state, { payload }) => insert(
    state,
    createTransaction(payload),
  ),
  [types.UPDATE_TRANSACTION]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRANSACTION]: (state, { payload }) => remove(state, payload),
}, initialState);

export default transactionsReducer;
