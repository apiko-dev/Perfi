import React from 'react';
import { ListView, Text } from 'react-native';
import { branch, compose, renderComponent, withProps } from 'recompose';
import R from 'ramda';
import TransactionsList from './TransactionsList';
import Collapse from './Collapse';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, categories }) => ({
  dataSource: ds.cloneWithRows(categories),
}));

const withGroupedTransactions = withProps((props) => {
  const { transactionsByCategories, onSelectTransaction } = props;

  return {
    renderRow: ({ id, name, icon }) => (
      <Collapse
        title={name}
        leftIcon={{
          name: icon,
          type: 'material-community',
        }}
        rightTitle="1000"
      >
        <TransactionsList
          transactions={transactionsByCategories[id]}
          onSelectTransaction={onSelectTransaction}
        />
      </Collapse>
    ),
  };
});

const NoTransactions = () => <Text>No transactions yet</Text>;

const withoutTransactions = branch(
  ({ transactionsByCategories }) => R.isEmpty(transactionsByCategories),
  renderComponent(NoTransactions),
);

const TransactionsGroupedByCategories = compose(
  withDataSource,
  withClonedDataSource,
  withGroupedTransactions,
  withoutTransactions,
)(ListView);

export default TransactionsGroupedByCategories;
