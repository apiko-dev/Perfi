import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import Value from './Value';

const enhance = compose(
  connect(state => ({
    currency: state.settings.currency,
  })),
  withProps(props => ({ value: Number(props.value) })),
  withProps(({ value, isTransfer }) => ({
    type: (value === 0 || isTransfer) ? 'other' : value > 0 ? 'income' : 'expense',
  })),
);

export default enhance(Value);
