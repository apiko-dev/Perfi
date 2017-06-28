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
  monthShort: 'MM/YY',
  monthLong: 'MMMM YYYY',
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

export const startOfMonth = (d = new Date()) => moment(d).startOf('month').toDate();

export const startOfNextMonth = (d = new Date()) =>
  startOfMonth(moment(d).add(1, 'months').toDate());

export const endOfMonth = (d = new Date()) => moment(d).endOf('month').toDate();

export const formatMonth = (d, f = timeFormats.monthShort) => moment(d).format(f);

export const addDays = (date, daysNumber) => moment(date).add(daysNumber, 'days').toDate();

// eslint-disable-next-line
export const getMonths = (from, to, months) => from.getTime() <= to.getTime()
  ? getMonths(startOfNextMonth(from), to, [...months, from])
  : months;
