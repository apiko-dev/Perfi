import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import FavouritesScreenView from './FavouritesScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getTransactions } from '../../modules/transactions/selectors';

import {
  startOfDay,
} from '../../utils/dateHelpers';


const mapStateToProps = (state, { dateForFiltering }) => ({
  data: getTransactions(state.transactions, dateForFiltering),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(mapStateToProps, transactionsOperations),
  withState('listRef', 'setListRef', null),

  withHandlers({
    onDeleteTransaction: props => id => props.deleteTransaction(id),
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (this.props.data !== prevProps.data) {
        setTimeout(() => this.props.listRef.scrollToOffset(0), 0);
      }
    },
  }),
);

export default hoistStatics(enhance)(FavouritesScreenView);
