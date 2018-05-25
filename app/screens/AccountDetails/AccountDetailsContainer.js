import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
  withProps,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import TransactionsScreenView from './AccountDetailsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { transfersOperations } from '../../modules/transfers';
import { getCurrentAccountTransfers } from '../../modules/transfers/selectors';
import { getCurrentAccountTransaction } from '../../modules/transactions/selectors';
import { getTotalBalance } from '../../modules/accounts/selectors';
import { startOfDay } from '../../utils/dateHelpers';
import { getParam } from '../../utils/navHelpers';
import screens from '../../constants/screens';


const mapStateToProps = (state, props) => ({
  transactions: getCurrentAccountTransaction(state, props),
  transfers: getCurrentAccountTransfers(state, props),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  withState('accountId', 'setAccountId', 1),
  connect(mapStateToProps, { ...transactionsOperations, ...transfersOperations }),

  withState('concatenatedData', 'setConcatenatedData', []),
  withState('listRef', 'setListRef', null),
  withState('isScrollEnabled', 'setScrollEnabled', true),

  withHandlers({
    onAddToFavourite: props => ({ isTransaction, id }) => {
      isTransaction
        ? props.addTransactionToFavourites(id)
        : props.addTransferToFavourites(id);
    },
    onDeleteFromFavourites: props => ({ isTransaction, id }) => {
      isTransaction
        ? props.onDeleteFromFavourites(id)
        : props.onDeleteTransferFromFavourites(id);
    },
    onDelete: props => ({ isTransaction, id }) => {
      isTransaction
        ? props.deleteTransaction(id)
        : props.deleteTransfer(id);
    },
    onGoToDetail: ({ navigation }) => ({ isTransaction, id }) => {
      navigation.navigate(isTransaction
        ? screens.TransactionDetail
        : screens.TransferDetail,
        { id });
    },
    onAllowScroll: props => isScrollEnabled => props.setScrollEnabled(isScrollEnabled),
    onAccountChange: props => id => props.setAccountId(id),
  }),

  withProps(props => ({
    concatenatedData: R.sortWith(
      [R.descend(R.prop('date'))], R.concat(props.transactions, props.transfers)),
  })),

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

export default hoistStatics(enhance)(TransactionsScreenView);
