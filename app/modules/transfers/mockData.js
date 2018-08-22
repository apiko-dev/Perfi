
const createTransfer = (props) => {
  const {
    value, from, to, date = new Date(), note, isFavourite = false,
  } = props;

  return {
    value, from, to, date, note, isFavourite,
  };
};

export default [
  createTransfer({
    value: 30,
    from: '2',
    to: '1',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut aliquet libero, ac blandit ligula. Sed et mi mattis, placerat nisl quis, mattis turpis. Praesent venenatis, diam sit amet mollis ornare, massa ipsum facilisis ante, vitae blandit lorem arcu sed quam.', // eslint-disable-line max-len
    isFavourite: true,
  }),
];
