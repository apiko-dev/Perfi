const randomNumberBetween = (start, end) => Math.floor((Math.random() * end) + start);

const randomDateBetween = (start, end) =>
  new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));

const createTransaction = () => ({
  value: randomNumberBetween(0, 100),
  account: `${randomNumberBetween(0, 2)}`,
  category: `${randomNumberBetween(0, 15)}`,
  date: randomDateBetween(new Date(2017, 3, 1), new Date()),
  note: 'test note',
});

export default new Array(100).fill(1).map(createTransaction);
