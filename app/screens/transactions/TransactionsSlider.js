import React, { PropTypes } from 'react';
import { compose, withProps } from 'recompose';
import { SlidesWithTabs } from '../../components';
import screens from '../../constants/screens';
import { getParam, getParamOr } from '../../utils/navHelpers';
import { getPeriod, getPeriodName } from '../../utils/dateHelpers';
import TransactionsChart from './transactionsChart/TransactionsChartContainer';
import TransactionsList from './transactionsList/TransactionsListContainer';

const getInterval = getParamOr('interval', 'day');

const getAccount = getParam('account');

const goToTransaction = navigation => transaction => navigation.navigate(
  screens.TransactionEditor,
  { transaction },
);

const TransactionSlide = (navigation) => {
  const Container = getParam('chartShown')(navigation) ? TransactionsChart : TransactionsList;

  const Slide = ({ index, key }) => (
    <Container
      key={key}
      onSelectTransaction={goToTransaction(navigation)}
      account={getAccount(navigation)}
      period={getPeriod(index, getInterval(navigation))}
    />
  );

  Slide.propTypes = {
    index: PropTypes.number,
    key: PropTypes.string,
  };

  return Slide;
};

const enhance = compose(
  withProps(({ navigation }) => ({
    slideRenderer: TransactionSlide(navigation),
    title: getPeriodName(getInterval(navigation)),
  })),
);

export default enhance(SlidesWithTabs);
