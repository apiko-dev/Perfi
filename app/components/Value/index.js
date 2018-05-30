import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import Value from './Value';

const enhance = compose(
  connect(state => ({
    currency: state.settings.currency,
  })),
  withProps(({ value, isTransfer }) => {
    const val = Number(value);
    return ({
      value: Math.abs(val),
      type: (val === 0 || isTransfer) ? 'other' : val > 0 ? 'income' : 'expense',
    });
  }),
);

export default enhance(Value);
