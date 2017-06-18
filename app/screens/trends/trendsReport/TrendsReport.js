import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { timeFormats } from '../../../utils/dateHelpers';
import { TouchableFormInput } from '../../../components';
import appStyles from '../../../styles/AppStyles';
import styles from './TrendsReportStyles';

const TrendsReport = (props) => {
  const {
    dateFrom,
    dateTo,
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
          style={{ width: 120, height: 40 }}
          value={moment(dateTo).format(timeFormats.month)}
          icon="calendar"
          onPress={onOpenDatePicker('dateTo')}
        />
      </View>
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
  onToggleDatePicker: PropTypes.func,
};

export default TrendsReport;
