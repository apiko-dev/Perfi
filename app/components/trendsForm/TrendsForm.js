import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  TouchableFormInput,
  TrendsList,
} from '../';
import calendarDateFormat from '../../utils/calendarDateFormat';
import TrendsListItem from '../trendsList/TrendsListItem';
import styles from '../../styles/TrendsStyles';

const { headerContainerStyle, headerLabelTextStyle } = styles;

const TrendsForm = (props) => {
  const {
    style: { rootStyle, rowStyle, blockStyle },
    dateFrom,
    formattedTransactions,
    dateTo,
    onChangeDateFrom,
    onChangeDateTo,
    isDateFromPickerVisible,
    isDateToPickerVisible,
    toggleDateFromPicker,
    toggleDateToPicker,
  } = props;

  const { byMonth, average: { income, expense } } = formattedTransactions;

  return (
    <View style={blockStyle}>
      <View style={rowStyle}>
        <View style={rootStyle}>
          <DateTimePicker
            isVisible={isDateFromPickerVisible}
            onConfirm={onChangeDateFrom}
            onCancel={toggleDateFromPicker}
            maximumDate={dateTo}
          />
          <TouchableFormInput
            icon="calendar-blank"
            onPress={toggleDateFromPicker}
            value={calendarDateFormat(dateFrom)}
          />
        </View>
        <View style={rootStyle}>
          <DateTimePicker
            isVisible={isDateToPickerVisible}
            onConfirm={onChangeDateTo}
            onCancel={toggleDateToPicker}
            minimumDate={dateFrom}
          />
          <TouchableFormInput
            icon="calendar-blank"
            onPress={toggleDateToPicker}
            value={calendarDateFormat(dateTo)}
          />
        </View>
      </View>
      <View style={headerContainerStyle}>
        <TrendsListItem
          label="Average"
          income={income}
          expense={expense}
          labelStyle={headerLabelTextStyle}
        />
      </View>
      <View style={rowStyle}>
        <TrendsList transactions={byMonth} />
      </View>
    </View>
  );
};

TrendsForm.propTypes = {
  style: PropTypes.object,
  dateFrom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  dateTo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  formattedTransactions: PropTypes.object,
  onChangeDateFrom: PropTypes.func,
  onChangeDateTo: PropTypes.func,
  isDateFromPickerVisible: PropTypes.bool,
  isDateToPickerVisible: PropTypes.bool,
  toggleDateFromPicker: PropTypes.func,
  toggleDateToPicker: PropTypes.func,
};

export default TrendsForm;
