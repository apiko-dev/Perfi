import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Modal from 'react-native-modal';
import moment from 'moment';
import R from 'ramda';
import { Calculator, FormInputWithIcon, RoundButton, TouchableFormInput } from '../index';

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
      {isReadyForSubmit && (
        <RoundButton
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
      <Modal
        style={style.calculatorModalStyle}
        isVisible={isCalculatorVisible}
      >
        <Calculator
          value={value}
          onSubmit={onChangeValue}
        />
      </Modal>
    </View>
  );
};

TransactionForm.propTypes = {
  style: PropTypes.object,
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
