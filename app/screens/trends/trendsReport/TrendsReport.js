import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { timeFormats } from '../../../utils/dateHelpers';
import { TouchableFormInput } from '../../../components';
import appStyles from '../../../styles/AppStyles';
// import styles from './TrendsReportStyles';

const TrendsReport = (props) => {
  const {
    dateFrom,
    dateTo,
    isDatePickerVisible,
    onSetDate,
    onToggleDatePicker,
  } = props;

  return (
    <View style={appStyles.rootStyle}>
      <TouchableFormInput
        value={moment(dateFrom).format(timeFormats.month)}
        icon="calendar"
        onPress={() => {}}
      />
      <TouchableFormInput
        value={moment(dateTo).format(timeFormats.month)}
        icon="calendar"
        onPress={() => {}}
      />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={onSetDate}
        onCancel={onToggleDatePicker}
      />
    </View>
  );
};

TrendsReport.propTypes = {
  dateFrom: PropTypes.instanceOf(Date),
  dateTo: PropTypes.instanceOf(Date),
  isDatePickerVisible: PropTypes.bool,
  onSetDate: PropTypes.func,
  onToggleDatePicker: PropTypes.func,
};

export default TrendsReport;
