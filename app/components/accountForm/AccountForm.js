import React, { PropTypes } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import SceneContentWrapper from '../SceneContentWrapper';
import { IconsPickerModal } from '../';
import Button from '../Button';
import TextFieldWithIcon from '../TextFieldWithIcon';
import CurrencyPicker from '../currencyPicker/CurrencyPicker';
import DatePicker from '../datePicker/DatePicker';
import FixedButtonsContainer from '../FixedButtonsContainer';

const AccountForm = (props) => {
  const {
    style,
    name,
    icon,
    date,
    currency,
    onSubmit,
    isValid,
    initialBalance,
    onNameChange,
    onIconChange,
    onDateChange,
    isPickerVisible,
    onCurrencyChange,
    onInitialBalanceChange,
    onTogglePicker,
  } = props;

  const iconsPickerButton = (
    <Button
      onPress={onTogglePicker}
      iconsSet={MaterialCommunityIcons}
      icon={icon}
      raised
    />
  );

  const submitButton = (
    <FixedButtonsContainer>
      <Button
        onPress={() => onSubmit(props)}
        icon="check"
        isRaised
        isBig
      />
    </FixedButtonsContainer>
  );

  return (
    <SceneContentWrapper>
      <View style={style.rowStyle}>
        <TextFieldWithIcon
          icon={iconsPickerButton}
          onChangeText={onNameChange}
          value={name}
        />

        <CurrencyPicker
          selectedValue={currency}
          onValueChange={onCurrencyChange}
        />
      </View>
      <View style={[style.rowStyle, style.rowStyleDark]}>
        <TextFieldWithIcon
          onChangeText={onInitialBalanceChange}
          value={initialBalance.toString()}
          label={'Initial balance'}
          keyboardType="numeric"
        />
        <DatePicker
          value={date}
          onChange={onDateChange}
        />
      </View>
      <IconsPickerModal
        isVisible={isPickerVisible}
        onIconPick={onIconChange}
        selectedIconName={icon}
        hideModal={onTogglePicker}
      />
      { isValid && submitButton }
    </SceneContentWrapper>
  );
};

AccountForm.propTypes = {
  isValid: PropTypes.bool,
  isPickerVisible: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    View.propTypes.style,
  ]),
  name: PropTypes.string,
  icon: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  currency: PropTypes.object,
  initialBalance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onNameChange: PropTypes.func,
  onIconChange: PropTypes.func,
  onDateChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  onTogglePicker: PropTypes.func,
  onInitialBalanceChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AccountForm;
