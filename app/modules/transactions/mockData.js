import moment from 'moment';


const createTransaction = (props) => {
  const {
    value, account, category, date = new Date(), note, isFavourite = false,
  } = props;

  return {
    value, account, category, date, note, isFavourite,
  };
};

/* eslint-disable max-len */
export default [
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
  createTransaction({ value: 40, account: '2', category: '2', date: moment().subtract(200, 'days'), isFavourite: true }),
  createTransaction({ value: -50, account: '0', category: '3', date: moment().subtract(200, 'days'), isFavourite: true }),
  createTransaction({ value: 20, account: '1', category: '2', date: moment().subtract(200, 'days'), isFavourite: true }),
  createTransaction({ value: -100, account: '1', category: '3', date: moment().subtract(70, 'days') }),
  createTransaction({ value: 120, account: '2', category: '2', date: moment().subtract(70, 'days') }),
  createTransaction({ value: -100, account: '0', category: '6', date: moment().subtract(120, 'days') }),
  createTransaction({ value: 200, account: '0', category: '6', date: moment().subtract(120, 'days') }),
  createTransaction({ value: -150, account: '1', category: '9', date: moment().subtract(120, 'days') }),
  createTransaction({ value: 300, account: '2', category: '2', date: moment().subtract(120, 'days') }),
  createTransaction({ value: 250, account: '2', category: '1', date: moment().subtract(120, 'days') }),
  createTransaction({ value: 510, account: '1', category: '1', date: moment().subtract(120, 'days') }),

  createTransaction({ value: -99, account: '1', category: '7', date: new Date() }),
  createTransaction({ value: -100, account: '0', category: '3', date: new Date() }),
  createTransaction({ value: 50, account: '0', category: '0', date: new Date() }),
  createTransaction({ value: 30, account: '2', category: '2', date: moment().subtract(1, 'days') }),
  createTransaction({ value: 56, account: '1', category: '0', date: moment().subtract(1, 'days') }),
  createTransaction({ value: -54, account: '2', category: '9', date: moment().subtract(1, 'days') }),
  createTransaction({ value: 600, account: '0', category: '1', date: new Date() }),
  createTransaction({ value: 760, account: '1', category: '2', date: new Date() }),
];
/* eslint-enable max-len */
