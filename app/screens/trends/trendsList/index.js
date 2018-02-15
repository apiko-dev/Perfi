import React from 'react';
import { compose, withProps } from 'recompose';
import { ListView } from 'react-native';
import { categoriesTypes as types } from '../../../constants/categories';
import { formatMonth, timeFormats } from '../../../utils/dateHelpers';
import { withDataSource } from '../../../utils/enhancers';
import TrendsListItem from './TrendsListItem';

const renderTrendItem = (months, totals) => (i) => {
  const label = formatMonth(months[i], timeFormats.monthLong);
  const total = totals.length ? totals[i] : undefined;

  return (
    <TrendsListItem
      label={label}
      income={total ? total[types.income] : 0}
      expense={total ? total[types.expense] : 0}
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
      labelBold
      withoutBorder
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
  withProps(({ months }) => ({ monthNames: Object.keys(months) })),
  withDataSource('monthNames'),
  withTrendItem,
  withFooter,
)(ListView);
