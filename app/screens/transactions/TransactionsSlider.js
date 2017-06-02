import React from 'react';
import moment from 'moment';
import { compose, withProps } from 'recompose';
import { getParam, getParamOr } from '../../utils/navHelpers';
import { SlidesWithTabs } from '../../components';
import screens from '../../constants/screens';
import TransactionsListContainer from './transactionsList/TransactionsListContainer';

const getTime = (index, interval = 'day') => moment().add(index, `${interval}s`);

const getPeriod = (index, interval = 'day') => ({
  from: getTime(index, interval).startOf(interval).toDate(),
  to: getTime(index, interval).endOf(interval).toDate(),
});

const timeFormats = {
  day: 'L',
  dayOfMonth: 'MM/DD',
  month: 'MM/YYYY',
  year: 'YYYY',
};

const getPeriodNameForWeek = (time) => {
  const startOfWeek = time.startOf('week').format(timeFormats.dayOfMonth);
  const endOfWeek = time.endOf('week').format(timeFormats.dayOfMonth);

  return `${startOfWeek}-${endOfWeek}`;
};

const getPeriodName = interval => (index) => {
  const time = getTime(index, interval);

  return interval === 'week' ? getPeriodNameForWeek(time) : time.format(timeFormats[interval]);
};

const getInterval = getParamOr('interval', 'day');

const getAccount = getParam('account');

const TransactionsListSlide = navigation => ({ index, key }) => (
  <TransactionsListContainer
    key={key}
    onSelectTransaction={transaction => navigation.navigate(
      screens.TransactionEditor,
      { transaction },
    )}
    account={getAccount(navigation)}
    period={getPeriod(index, getInterval(navigation))}
  />
);

const enhance = compose(
  withProps(({ navigation }) => ({
    slideRenderer: TransactionsListSlide(navigation),
    title: getPeriodName(getInterval(navigation)),
  })),
);

export default enhance(SlidesWithTabs);
