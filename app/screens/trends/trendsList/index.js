import React from 'react';
import { compose, withProps } from 'recompose';
import R from 'ramda';
import { ListView } from 'react-native';
import { categoriesTypes as types } from '../../../constants/categories';
import { formatMonth, timeFormats } from '../../../utils/dateHelpers';
import TrendsListItem from './TrendsListItem';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, months }) => ({
  dataSource: ds.cloneWithRows(R.keys(months)),
}));

const renderTrendItem = (months, totals) => (i) => {
  const label = formatMonth(months[i], timeFormats.monthLong);
  const total = totals[i];

  return (
    <TrendsListItem
      label={label}
      income={total[types.income]}
      expense={total[types.expense]}
    />
  );
};

const withTrendItem = withProps(({ months, totals }) => ({
  renderRow: renderTrendItem(months, totals),
}));

const withFooter = withProps(({ averageIncome, averageExpense }) => ({
  renderFooter: () => (
    <TrendsListItem
      label="Average, per month"
      income={averageIncome}
      expense={averageExpense}
    />
  ),
}));

export default compose(
  withProps({
    enableEmptySections: true,
    removeClippedSubviews: false,
  }),
  withDataSource,
  withClonedDataSource,
  withTrendItem,
  withFooter,
)(ListView);
