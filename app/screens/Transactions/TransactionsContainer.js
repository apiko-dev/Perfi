import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { Animated, Platform } from 'react-native';
import TransactionsScreenView from './TransactionsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getTransactions } from '../../modules/transactions/selectors';
import { getTotalBalance } from '../../modules/accounts/selectors';
import { startOfDay } from '../../utils/dateHelpers';
import screens from '../../constants/screens';
import { dimensions } from '../../styles';


const mapStateToProps = (state, props) => ({
  transactions: getTransactions(state, props),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(mapStateToProps, transactionsOperations),

  withState('listRef', 'setListRef', null),
  withState('isScrollEnabled', 'setScrollEnabled', true),
  withState('scrollY', 'setScrollY',
    new Animated.Value(Platform.OS === 'ios' ? -dimensions.headerMaxHeight : 0)),

  withHandlers({
    onDeleteTransaction: props => id => props.deleteTransaction(id),
    onAddTransactionToFavourite: props => id => props.addTransactionToFavourites(id),
    onDeleteFromFavourites: props => id => props.onDeleteFromFavourites(id),
    onGoToDetail: ({ navigation }) => ({ isTransaction, id }) => {
      if (isTransaction) navigation.navigate(screens.TransactionDetail, { id });
    },
    onAllowScroll: props => isScrollEnabled => props.setScrollEnabled(isScrollEnabled),
  }),
  lifecycle({
    componentDidMount() {
      const params = R.pick(['isChartShown', 'onToggleChart'], this.props);
      this.props.navigation.setParams(params);
    },
    // componentDidUpdate(prevProps) {
    //   const newTrans = this.props.transactions;
    //   const oldTrans = prevProps.transactions;
    //   if (newTrans !== oldTrans && (oldTrans.length - newTrans.length) !== 1) {
    //     setTimeout(() => this.props.listRef._listRef.scrollToOffset(0), 0);
    //   }
    // },
  }),
);

export default hoistStatics(enhance)(TransactionsScreenView);
