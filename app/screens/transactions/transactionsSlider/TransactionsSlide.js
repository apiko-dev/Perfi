import React, { PropTypes } from 'react';
import TransactionsListView from '../transactionsList/TransactionsListView';
import TransactionsChart from '../transactionsChart/TransactionsChart';

const TransactionsSlide = ({ chartShown, ...props }) => {
  const Slide = chartShown ? TransactionsChart : TransactionsListView;

  return <Slide {...props} />;
};

TransactionsSlide.propTypes = {
  chartShown: PropTypes.bool,
};

export default TransactionsSlide;
