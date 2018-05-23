import {
  compose,
  hoistStatics,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import TransferDetailScreenView from './TransferDetailScreenView';
import { withPickParams } from '../../utils/enhancers';

const mapStateToProps = (state, props) => {
  const transaction = R.pathOr({}, ['transactions', 'byId', props.id], state);
  const accountId = R.pathOr(null, ['account'], transaction);
  const account = state.accounts.byId[accountId];
  const category = state.categories.byId[transaction.category];

  return ({ transaction, account, category });
};

const enhance = compose(
  withPickParams,
  connect(mapStateToProps),
);
export default hoistStatics(enhance)(TransferDetailScreenView);
