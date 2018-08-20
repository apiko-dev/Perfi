import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import Value from './Value';

const enhance = compose(
  connect(state => ({
    currency: state.settings.currency,
  })),
  withProps(({ value, isTransfer, type }) => {
    const val = type ? value : Number(value);
    return ({
      value: type ? val : Math.abs(val),
      type: type || ((val === 0 || isTransfer) ? 'other' : val > 0 ? 'income' : 'expense'),
    });
  }),
);

export default enhance(Value);
