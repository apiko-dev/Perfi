import React from 'react';
import { ListView, Text } from 'react-native';
import { branch, compose, renderComponent, withProps } from 'recompose';
import TransactionItem from './TransactionItem';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, transactions }) => ({
  dataSource: ds.cloneWithRows(transactions || []),
}));

const withTransactionItem = withProps(({ onSelectTransaction }) => ({
  renderRow: compose(
    withProps(props => ({
      onPress: () => onSelectTransaction(props),
    })),
  )(TransactionItem),
}));

const withoutTransactions = branch(
  ({ transactions }) => !transactions || transactions.length === 0,
  renderComponent(() => <Text>No transactions yet</Text>),
);

const TransactionsList = compose(
  withDataSource,
  withClonedDataSource,
  withTransactionItem,
  withoutTransactions,
)(ListView);

export default TransactionsList;
