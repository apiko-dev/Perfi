import moment from 'moment';

export const getTime = (index, interval = 'day') => moment().add(index, `${interval}s`);

export const getPeriod = (index, interval = 'day') => ({
  from: getTime(index, interval).startOf(interval).toDate(),
  to: getTime(index, interval).endOf(interval).toDate(),
});

export const timeFormats = {
  day: 'L',
  dayOfMonth: 'MM/DD',
  month: 'MM/YYYY',
  year: 'YYYY',
};

export const getPeriodNameForWeek = (time) => {
  const startOfWeek = time.startOf('week').format(timeFormats.dayOfMonth);
  const endOfWeek = time.endOf('week').format(timeFormats.dayOfMonth);

  return `${startOfWeek}-${endOfWeek}`;
};

export const getPeriodName = interval => (index) => {
  const time = getTime(index, interval);

  return interval === 'week' ? getPeriodNameForWeek(time) : time.format(timeFormats[interval]);
};
