import React from 'react';
import { ListView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { branch, compose, renderComponent, withProps } from 'recompose';
import R from 'ramda';
import CategoryWithTransactions from './CategoryWithTransactions';
import listItemStyles from './TransactionItemStyles';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, categories }) => ({
  dataSource: ds.cloneWithRows(categories),
}));

const withGroupedTransactions = withProps((props) => {
  const { transactionsByCategories, onSelectTransaction } = props;

  return {
    renderRow: category => (
      <CategoryWithTransactions
        category={category}
        transactions={transactionsByCategories[category.id]}
        onSelectTransaction={onSelectTransaction}
      />
    ),
  };
});

const NoTransactions = () => (
  <ListItem
    containerStyle={listItemStyles.rootStyle}
    title="No transactions yet"
    hideChevron
  />
);

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
