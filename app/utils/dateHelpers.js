import moment from 'moment';

export const timeFormats = {
  day: 'L',
  dayOfMonth: 'MM/DD',
  month: 'MM/YYYY',
  monthShort: 'MM/YY',
  monthLong: 'MMMM YYYY',
  year: 'YYYY',
};


export const startOfMonth = (d = new Date()) => moment(d).startOf('month').toDate();

export const startOfNextMonth = (d = new Date()) =>
  startOfMonth(moment(d).add(1, 'months').toDate());

export const formatMonthWithYear = (d, f = timeFormats.month) => moment(d).format(f);


// eslint-disable-next-line
export const getMonths = (from, to, months) => from.getTime() <= to.getTime()
  ? getMonths(startOfNextMonth(from), to, [...months, from])
  : months;

export const dateWithDots = d => moment(d).format('DD.MM.YYYY');
export const dateWithTime = d => moment(d).format('HH:MM | DD.MM.YYYY');


export const startOfDay = moment().startOf('day');
export const startOfYesterday = moment().subtract(1, 'days').startOf('day');
export const startOfYear = moment().subtract(11, 'months').startOf('month');
export const startOfCurrentWeek = moment().startOf('week');
export const startOfCurrentMonth = moment().startOf('month');
export const startOfCurrentYear = moment().startOf('year');
export const startOfHalfYearAgo = moment().subtract(5, 'months').startOf('month');
export const startOf10YearsAgo = moment().subtract(10, 'years').startOf('month');


export const isToday = date => date.startOf('day').isSame(moment().startOf('day'));
export const isYesterday = date => date.isSame(moment().subtract(1, 'days').startOf('day'));


export const formatDateForSubtitle = (d) => {
  if (!d.format) {
    if (d.from === startOf10YearsAgo) { return 'All time'; }
    return `${dateWithDots(d.from)} - ${dateWithDots(d.to)}`;
  } return dateWithDots(d);
};
export const formatDateForPie = (d) => {
  if (!d.format) {
    return `${dateWithDots(d.from)}\n${dateWithDots(d.to)}`;
  } return dateWithDots(d);
};
