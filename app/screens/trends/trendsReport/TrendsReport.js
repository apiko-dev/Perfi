import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { timeFormats } from '../../../utils/dateHelpers';
import { BarChart, TouchableFormInput } from '../../../components';
import appStyles from '../../../styles/AppStyles';
import styles from './TrendsReportStyles';

const TrendsReport = (props) => {
  const {
    dateFrom,
    dateTo,
    chartData,
    labels,
    isDatePickerVisible,
    onCloseDatePicker,
    onSetDate,
    onOpenDatePicker,
  } = props;

  return (
    <View style={[appStyles.rootStyle, appStyles.containerStyle, appStyles.withMarginTop]}>
      <View style={[appStyles.rowStyle, styles.dateRangeStyle]}>
        <TouchableFormInput
          style={styles.dateButtonStyle}
          value={moment(dateFrom).format(timeFormats.month)}
          icon="calendar"
          onPress={onOpenDatePicker('dateFrom')}
        />
        <TouchableFormInput
          style={styles.dateButtonStyle}
          value={moment(dateTo).format(timeFormats.month)}
          icon="calendar"
          onPress={onOpenDatePicker('dateTo')}
        />
      </View>
      <BarChart data={chartData} labels={labels} />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={onSetDate}
        onCancel={onCloseDatePicker}
      />
    </View>
  );
};

TrendsReport.propTypes = {
  dateFrom: PropTypes.instanceOf(Date),
  dateTo: PropTypes.instanceOf(Date),
  isDatePickerVisible: PropTypes.bool,
  onSetDate: PropTypes.func,
  onOpenDatePicker: PropTypes.func,
  onCloseDatePicker: PropTypes.func,
};

export default TrendsReport;
