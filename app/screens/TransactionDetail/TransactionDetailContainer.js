import {
  compose,
  hoistStatics,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import TransactionDetailScreenView from './TransactionDetailScreenView';
import { withPickParams } from '../../utils/enhancers';

const mapStateToProps = (state, props) => {
  const transaction = R.pathOr({}, ['transactions', 'byId', props.id], state);
  const accountId = R.pathOr(null, ['account'], transaction);
  const account = R.pathOr({}, ['accounts', 'byId', accountId], state);
  const category = state.categories.byId[transaction.category];

  return ({ transaction, account, category });
};

const enhance = compose(
  withPickParams,
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const type = this.props.transaction.value > 0 ? 'income' : 'expense';
      this.props.navigation.setParams({ type });
    },
  })
);
export default hoistStatics(enhance)(TransactionDetailScreenView);
