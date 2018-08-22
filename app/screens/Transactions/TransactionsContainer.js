import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  withProps,
  pure,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { Animated, Platform } from 'react-native';
import TransactionsScreenView from './TransactionsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { transfersOperations } from '../../modules/transfers';
import { getTransactions } from '../../modules/transactions/selectors';
import { getTransfers } from '../../modules/transfers/selectors';
import { getTotalBalance } from '../../modules/accounts/selectors';
import { startOfDay } from '../../utils/dateHelpers';
import screens from '../../constants/screens';
import { dimensions } from '../../styles';


const mapStateToProps = (state, props) => ({
  transactions: getTransactions(state, props),
  transfers: getTransfers(state, props),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(
    mapStateToProps,
    {
      ...transactionsOperations,
      ...transfersOperations,
    }
  ),

  withState('listRef', 'setListRef', null),
  withState('isScrollEnabled', 'setScrollEnabled', true),
  withState('scrollY', 'setScrollY',
    new Animated.Value(Platform.OS === 'ios' ? -dimensions.headerMaxHeight : 0)),

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
  }),

  withProps(props => ({
    concatenatedData: R.sortWith(
      [R.descend(R.prop('date'))], R.concat(props.transactions, props.transfers)),
  })),

  /**
   * committed because when edit transaction list don't update
   */
  // lifecycle({
  //   shouldComponentUpdate(nextProps) {
  //     return this.props.concatenatedData.length !== nextProps.concatenatedData.length;
  //   },
  //
  //   // componentDidUpdate(prevProps) {
  //   //   const newTrans = this.props.transactions;
  //   //   const oldTrans = prevProps.transactions;
  //   //   if (newTrans !== oldTrans && (oldTrans.length - newTrans.length) !== 1) {
  //   //     setTimeout(() => this.props.listRef._listRef.scrollToOffset(0), 0);
  //   //   }
  //   // },
  // }),
  pure,
);

export default hoistStatics(enhance)(TransactionsScreenView);
