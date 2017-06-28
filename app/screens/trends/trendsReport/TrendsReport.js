import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { timeFormats } from '../../../utils/dateHelpers';
import { BarChart, TouchableFormInput } from '../../../components';
import TrendsList from '../trendsList';
import appStyles from '../../../styles/AppStyles';
import styles from './TrendsReportStyles';

const TrendsReport = (props) => {
  const {
    dateFrom,
    dateTo,
    minDate,
    maxDate,
    chartData,
    labels,
    totals,
    months,
    averageIncome,
    averageExpense,
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
      <BarChart
        data={chartData}
        labels={labels}
      />
      <TrendsList
        totals={totals}
        months={months}
        averageIncome={averageIncome}
        averageExpense={averageExpense}
      />
      <DateTimePicker
        minimumDate={minDate}
        maximumDate={maxDate}
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
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  chartData: PropTypes.array,
  labels: PropTypes.array,
  months: PropTypes.array,
  totals: PropTypes.array,
  averageIncome: PropTypes.number,
  averageExpense: PropTypes.number,
  isDatePickerVisible: PropTypes.bool,
  onSetDate: PropTypes.func,
  onOpenDatePicker: PropTypes.func,
  onCloseDatePicker: PropTypes.func,
};

export default TrendsReport;
