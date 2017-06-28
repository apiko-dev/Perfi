import React from 'react';
import { ListView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { branch, compose, renderComponent, withProps } from 'recompose';
import R from 'ramda';
import CategoryWithTransactions from './CategoryWithTransactions';
import { groupByCategories } from '../../../utils/transactionsHelpers';
import { withDataSource } from '../../../utils/enhancers';
import listItemStyles from './TransactionItemStyles';

const withTransactionsByCategories = withProps(({ transactions }) => ({
  transactionsByCategories: groupByCategories(transactions),
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
  withTransactionsByCategories,
  withDataSource('categoriesById'),
  withGroupedTransactions,
  withoutTransactions,
)(ListView);

export default TransactionsGroupedByCategories;
