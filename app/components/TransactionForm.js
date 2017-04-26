import React, { PropTypes } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { FormInput } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { RoundButton } from '../components';

const TransactionForm = ({
  value,
  category,
  date,
  note,
  isDatePickerVisible,
  onChangeValue,
  onUpdateNote,
  onSetDate,
  onToggleDatePicker,
  onSubmit,
  style,
}) => (
  <View style={style.rootStyle}>
    <FormInput
      value={value}
      onChangeText={onChangeValue}
    />
    <FormInput
      value={category}
      placeholder="Category"
      editable={false}
    />
    <TouchableHighlight
      onPress={onToggleDatePicker}
    >
      <View>
        <FormInput
          value={moment(date).format('dddd, L')}
          editable={false}
        />
      </View>
    </TouchableHighlight>
    <FormInput
      value={note}
      placeholder="Note"
      multiline
      onChangeText={onUpdateNote}
    />
    <RoundButton
      style={style.submitButtonStyle}
      iconName="check"
      onPress={onSubmit}
    />
    <DateTimePicker
      isVisible={isDatePickerVisible}
      onConfirm={onSetDate}
      onCancel={onToggleDatePicker}
    />
  </View>
);

TransactionForm.propTypes = {
  value: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.object,
  note: PropTypes.string,
  isDatePickerVisible: PropTypes.bool,
  onChangeValue: PropTypes.func,
  onUpdateNote: PropTypes.func,
  onSetDate: PropTypes.func,
  onToggleDatePicker: PropTypes.func,
  onSubmit: PropTypes.func,
  // onSelectCategory: PropTypes.func,
  style: PropTypes.object,
};

export default TransactionForm;
