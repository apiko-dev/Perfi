import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import AccountDetailsScreenView from './AccountDetailsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getCurrentAccountTransaction } from '../../modules/transactions/selectors';
import { getTotalBalance } from '../../modules/accounts/selectors';
import { startOfDay } from '../../utils/dateHelpers';
import { getParam } from '../../utils/navHelpers';


const mapStateToProps = (state, props) => ({
  transactions: getCurrentAccountTransaction(state, props),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  withState('accountId', 'setAccountId', 0),
  connect(mapStateToProps, transactionsOperations),

  withState('listRef', 'setListRef', null),
  withState('isScrollEnabled', 'setScrollEnabled', true),

  withHandlers({
    onDeleteTransaction: props => id => props.deleteTransaction(id),
    onAddTransactionToFavourite: props => id => props.addTransactionToFavourites(id),
    onDeleteFromFavourites: props => id => props.onDeleteFromFavourites(id),
    onAllowScroll: props => isScrollEnabled => props.setScrollEnabled(isScrollEnabled),
    onAccountChange: props => id => props.setAccountId(id),
  }),
  lifecycle({
    componentDidMount() {
      this.props.setAccountId(getParam('accountId')(this.props.navigation));
    },
    componentDidUpdate(prevProps) {
      const newTrans = this.props.transactions;
      const oldTrans = prevProps.transactions;
      if (newTrans !== oldTrans && (oldTrans.length - newTrans.length) !== 1) {
        setTimeout(() => this.props.listRef._listRef.scrollToOffset(0), 0);
      }
    },
  }),

);

export default hoistStatics(enhance)(AccountDetailsScreenView);
