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
import { getFavouritesTransactions } from '../../modules/transactions/selectors';

import {
  startOfDay,
} from '../../utils/dateHelpers';


const mapStateToProps = (state, props) => ({
  data: getFavouritesTransactions(state, props),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(mapStateToProps, transactionsOperations),
  withState('listRef', 'setListRef', null),

  withHandlers({
    onDeleteFromFavourites: props => id => props.onDeleteFromFavourites(id),
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
