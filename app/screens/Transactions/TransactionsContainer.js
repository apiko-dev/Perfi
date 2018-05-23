import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import TransactionsScreenView from './TransactionsScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getTransactions } from '../../modules/transactions/selectors';
import { getTotalBalance } from '../../modules/accounts/selectors';
import { startOfDay } from '../../utils/dateHelpers';
import screens from '../../constants/screens';


const mapStateToProps = (state, props) => ({
  transactions: getTransactions(state, props),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(mapStateToProps, transactionsOperations),

  withState('listRef', 'setListRef', null),

  withHandlers({
    onDeleteTransaction: props => id => props.deleteTransaction(id),
    onAddTransactionToFavourite: props => id => props.addTransactionToFavourites(id),
    onDeleteFromFavourites: props => id => props.onDeleteFromFavourites(id),
    onGoToDetail: ({ navigation }) => ({ isTransaction, id }) => {
      if (isTransaction) navigation.navigate(screens.TransactionDetail, { id });
    },
  }),
  lifecycle({
    componentDidMount() {
      const params = R.pick(['isChartShown', 'onToggleChart'], this.props);
      this.props.navigation.setParams(params);
    },
    componentDidUpdate(prevProps) {
      if (this.props.transactions !== prevProps.transactions) {
        setTimeout(() => this.props.listRef.scrollToOffset(0), 0);
      }
    },
  }),

);

export default hoistStatics(enhance)(TransactionsScreenView);
