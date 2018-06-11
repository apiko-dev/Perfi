import { handleActions } from 'redux-actions';
import moment from 'moment';
import types from './types';
import { insertWithUUID, insertAllWithUUID, update, remove } from '../../utils/stateHelper';

const createTransaction = (props) => {
  const {
    value, account, category, date = new Date(), note, isFavourite = false,
  } = props;

  return {
    value, account, category, date, note, isFavourite,
  };
};


const defaultAccounts = [
  createTransaction({ value: 1000, account: '1', category: '1', date: moment().subtract(35, 'days') }),
  createTransaction({ value: -600, account: '1', category: '6', date: moment().subtract(35, 'days') }),
  createTransaction({ value: 2000, account: '1', category: '1', date: moment().subtract(70, 'days') }),
  createTransaction({ value: -1500, account: '1', category: '6', date: moment().subtract(70, 'days') }),
  createTransaction({ value: 1400, account: '1', category: '1', date: moment().subtract(220, 'days') }),
  createTransaction({ value: 600, account: '1', category: '0', date: moment().subtract(150, 'days') }),
  createTransaction({ value: 600, account: '1', category: '0', date: moment().subtract(260, 'days') }),
  createTransaction({ value: -1000, account: '1', category: '6', date: moment().subtract(150, 'days') }),
  createTransaction({ value: -1000, account: '1', category: '6', date: moment().subtract(260, 'days') }),
  createTransaction({ value: -1000, account: '1', category: '6', date: moment().subtract(290, 'days') }),
  createTransaction({ value: 2000, account: '1', category: '0', date: moment().subtract(290, 'days') }),
  createTransaction({ value: -2400, account: '1', category: '9', date: moment().subtract(320, 'days') }),
  createTransaction({ value: 2000, account: '1', category: '0', date: moment().subtract(320, 'days') }),
  createTransaction({ value: 1540, account: '1', category: '0', date: moment().subtract(350, 'days') }),
  createTransaction({ value: -40, account: '1', category: '5', date: moment().subtract(350, 'days') }),
  createTransaction({
    value: 40,
    account: '2',
    category: '2',
    date: moment().subtract(200, 'days'),
    isFavourite: true,
  }),
  createTransaction({
    value: -50,
    account: '3',
    category: '3',
    date: moment().subtract(200, 'days'),
    isFavourite: true,
  }),
  createTransaction({
    value: 20,
    account: '1',
    category: '2',
    date: moment().subtract(200, 'days'),
    isFavourite: true,
  }),
  createTransaction({
    value: -100,
    account: '1',
    category: '3',
    date: moment().subtract(70, 'days'),
  }),
  createTransaction({
    value: 120,
    account: '2',
    category: '2',
    date: moment().subtract(70, 'days'),
  }),
  createTransaction({
    value: -100,
    account: '3',
    category: '6',
    date: moment().subtract(120, 'days'),
  }),
  createTransaction({
    value: 200,
    account: '0',
    category: '6',
    date: moment().subtract(120, 'days'),
  }),
  createTransaction({
    value: -150,
    account: '1',
    category: '9',
    date: moment().subtract(120, 'days'),
  }),
  createTransaction({
    value: 300,
    account: '2',
    category: '2',
    date: moment().subtract(120, 'days'),
  }),
  createTransaction({
    value: 250,
    account: '2',
    category: '1',
    date: moment().subtract(120, 'days'),
  }),
  createTransaction({
    value: 510,
    account: '1',
    category: '1',
    date: moment().subtract(120, 'days'),
  }),

  createTransaction({ value: -99, account: '1', category: '7', date: new Date() }),
  createTransaction({ value: -100, account: '0', category: '3', date: new Date() }),
  createTransaction({ value: 50, account: '3', category: '0', date: new Date() }),
  createTransaction({ value: 30, account: '2', category: '2', date: moment().subtract(1, 'days') }),
  createTransaction({ value: 56, account: '1', category: '0', date: moment().subtract(1, 'days') }),
  createTransaction({ value: -54, account: '2', category: '9', date: moment().subtract(1, 'days') }),
  createTransaction({ value: 600, account: '3', category: '1', date: new Date() }),
  createTransaction({ value: 760, account: '1', category: '2', date: new Date() }),
];

const initialState = {};

const transactionsReducer = handleActions({
  [types.CREATE_TRANSACTION]: (state, { payload }) => insertWithUUID(
    state,
    createTransaction(payload),
  ),
  [types.UPDATE_TRANSACTION]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRANSACTION]: (state, { payload }) => remove(state, payload),
  [types.GENERATE_MOCK_DATA]: (state) => insertAllWithUUID(state, defaultAccounts),
}, initialState);

export default transactionsReducer;
