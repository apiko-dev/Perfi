import {
  compose,
  hoistStatics,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import TransactionDetailScreenView from './TransactionDetailScreenView';
import { withPickParams } from '../../utils/enhancers';
import screens from '../../constants/screens';
import { getParam } from '../../utils/navHelpers';

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
      const nav = this.props.navigation;

      nav.setParams({
        onEditPress: () => nav.navigate(screens.Calculator, { id: getParam('id')(nav), type }),
      });
    },
  })
);
export default hoistStatics(enhance)(TransactionDetailScreenView);
