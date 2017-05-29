import R from 'ramda';
import moment from 'moment';

const getNavParameter = (name, def) => R.pathOr(def, ['state', 'params', name]);

export const getAccount = getNavParameter('account');

export const getInterval = getNavParameter('interval', 'day');

const getTime = (index, interval = 'day') => moment().add(index, `${interval}s`);

export const getPeriod = (index, interval = 'day') => ({
  from: getTime(index, interval).startOf(interval).toDate(),
  to: getTime(index, interval).endOf(interval).toDate(),
});

export const getPeriodName = interval => index => {
  const time = getTime(index, interval);
  const timeFormats = {
    day: 'L',
    dayOfMonth: 'MM/DD',
    month: 'MM/YYYY',
    year: 'YYYY',
  };
  let name = time.format(timeFormats[interval]);

  if (interval === 'week') {
    const startOfWeek = time.startOf(interval).format(timeFormats.dayOfMonth);
    const endOfWeek = time.endOf(interval).format(timeFormats.dayOfMonth);
    name = `${startOfWeek}-${endOfWeek}`;
  }

  return name;
};