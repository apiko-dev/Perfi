import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';
import TransactionItem from './TransactionItem';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, transactions = [] }) => ({
  dataSource: ds.cloneWithRows(transactions),
}));

const withTransactionItem = withProps(({ onSelectTransaction }) => ({
  renderRow: compose(
    withProps(props => ({
      onPress: () => onSelectTransaction(props),
    })),
  )(TransactionItem),
}));

const TransactionsList = compose(
  withDataSource,
  withClonedDataSource,
  withTransactionItem,
)(ListView);

export default TransactionsList;
