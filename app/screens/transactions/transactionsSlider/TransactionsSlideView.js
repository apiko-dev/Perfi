import React, { PropTypes } from 'react';
import TransactionsListView from '../transactionsList/TransactionsListView';
import TransactionsChartView from '../transactionsChart/TransactionsChartView';

const TransactionsSlide = ({ showChart, ...props }) => {
  const Slide = showChart ? TransactionsChartView : TransactionsListView;

  return <Slide {...props} />;
};

TransactionsSlide.propTypes = {
  showChart: PropTypes.bool,
};

export default TransactionsSlide;
