import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';
import { withDataSource } from '../../../utils/enhancers';
import TransactionItem from './TransactionItem';

const withTransactionItem = withProps(({ onSelectTransaction }) => ({
  renderRow: compose(
    withProps(props => ({
      onPress: () => onSelectTransaction(props),
    })),
  )(TransactionItem),
}));

const TransactionsList = compose(
  withDataSource('transactions'),
  withTransactionItem,
)(ListView);

export default TransactionsList;
