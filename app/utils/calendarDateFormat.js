import moment from 'moment';

const calendarDateFormat = date =>
  moment(date).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastDay: '[Yesterday]',
    sameElse: 'DD-MM-YYYY',
    nextWeek: 'DD-MM-YYYY',
    lastWeek: 'DD-MM-YYYY',
  });

export default calendarDateFormat;
