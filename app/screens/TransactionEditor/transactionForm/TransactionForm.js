import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import R from 'ramda';
import {
  ActionButton,
  CalculatorModal,
  Card,
  FormInputWithIcon,
  TouchableFormInput,
} from '../../../components';

const defaultIcon = R.propOr('help-circle', 'icon');

const TransactionForm = (props) => {
  const {
    style,
    value,
    account,
    category,
    date,
    note,
    isDatePickerVisible,
    isCalculatorVisible,
    isReadyForSubmit,
    onChangeValue,
    onChangeAccount,
    onChangeCategory,
    onUpdateNote,
    onSetDate,
    onToggleDatePicker,
    onToggleCalculator,
    onSubmit,
  } = props;

  return (
    <View style={style.rootStyle}>
      <Card>
        <TouchableFormInput
          icon="calculator"
          value={value.toString()}
          onPress={onToggleCalculator}
        />
        <TouchableFormInput
          value={account && account.name}
          icon={defaultIcon(account)}
          placeholder="Account"
          onPress={onChangeAccount}
        />
        <TouchableFormInput
          value={category && category.name}
          icon={defaultIcon(category)}
          placeholder="Category"
          onPress={onChangeCategory}
        />
        <TouchableFormInput
          value={moment(date).format('dddd, L')}
          icon="calendar"
          onPress={onToggleDatePicker}
        />
        <FormInputWithIcon
          value={note}
          icon="lead-pencil"
          placeholder="Note"
          multiline
          onChangeText={onUpdateNote}
        />
      </Card>
      {isReadyForSubmit && (
        <ActionButton
          style={style.submitButtonStyle}
          iconName="check"
          onPress={onSubmit}
        />
      )}
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={onSetDate}
        onCancel={onToggleDatePicker}
      />
      <CalculatorModal
        value={value}
        isVisible={isCalculatorVisible}
        onSubmit={onChangeValue}
      />
    </View>
  );
};

TransactionForm.propTypes = {
  style: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  account: PropTypes.object,
  category: PropTypes.object,
  date: PropTypes.object,
  note: PropTypes.string,
  isDatePickerVisible: PropTypes.bool,
  isCalculatorVisible: PropTypes.bool,
  isReadyForSubmit: PropTypes.bool,
  onChangeValue: PropTypes.func,
  onChangeAccount: PropTypes.func,
  onChangeCategory: PropTypes.func,
  onUpdateNote: PropTypes.func,
  onSetDate: PropTypes.func,
  onToggleDatePicker: PropTypes.func,
  onToggleCalculator: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default TransactionForm;
