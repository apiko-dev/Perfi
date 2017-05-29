import React from 'react';
import { compose, withProps } from 'recompose';
import R from 'ramda';
import { ListView } from 'react-native';
import { categoriesTypes } from '../../constants/categories';
import TrendsListItem from './TrendsListItem';

const withDataSource = withProps({
  enableEmptySections: true,
  removeClippedSubviews: false,
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, transactions }) => ({
  dataSource: ds.cloneWithRows(R.keys(transactions)),
}));

const withTrendItem = withProps(({ transactions }) => ({
  renderRow: (index) => {
    const expense = transactions[index][categoriesTypes.expense];
    const income = transactions[index][categoriesTypes.income];

    return (<TrendsListItem
      label={index}
      income={income ? income.total : 0}
      expense={expense ? expense.total : 0}
    />);
  },
}));

export default compose(
  withDataSource,
  withClonedDataSource,
  withTrendItem,
)(ListView);
