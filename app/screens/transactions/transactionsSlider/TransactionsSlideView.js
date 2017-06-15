import React, { PropTypes } from 'react';
import TransactionsListView from '../transactionsList/TransactionsListView';
import TransactionsChart from '../transactionsChart/TransactionsChart';

const TransactionsSlide = ({ showChart, ...props }) => {
  const Slide = showChart ? TransactionsChart : TransactionsListView;

  return <Slide {...props} />;
};

TransactionsSlide.propTypes = {
  showChart: PropTypes.bool,
};

export default TransactionsSlide;
