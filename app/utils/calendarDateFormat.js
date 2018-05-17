import moment from 'moment';

const calendarDateFormat = date =>
  moment(date).calendar(null, {
    sameDay: '[Today2]',
    nextDay: '[Tomorrow2]',
    lastDay: '[Yesterday3]',
    sameElse: 'DD.MM.YYYY',
    nextWeek: 'DD.MM.YYYY',
    lastWeek: 'DD.MM.YYYY',
  });

export default calendarDateFormat;
