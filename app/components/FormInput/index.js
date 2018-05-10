import React from 'react';
import T from 'prop-types';
import { ViewPropTypes } from 'react-native';
import Input from '../Input';
import TouchableItem from '../TouchableItem';
import Text from '../Text';
import s from './styles';
import { colors, dimensions } from '../../styles';


const renderIcon = (icon) => {
  if (icon.name) {
    return {
      ...icon,
      size: dimensions.iconSize,
    };
  }
  return null;
};
const FormInput = (props) => {
  const {
    isDropped,
    onPress,
    value,
    placeholder,
    disabledPlaceholder,
    style,
    containerStyle,
    isSelected,
    icon,
    label,
    labelStyle,
    disabled = false,
  } = props;

  return (
    <TouchableItem onPress={onPress} style={containerStyle}>
      {!!label && <Text style={[s.label, labelStyle]}>{label}</Text>}
      <Input
        editable={false}
        containerStyle={style}
        secondContainerStyle={[s.secondInputContainer, disabled && {
          backgroundColor: colors.grey,
        }, isSelected && s.selectedSecondInputContainer]}
        style={[s.inputStyle, isSelected && s.selectedInputStile]}
        isValid
        icon={renderIcon(icon, isDropped)}
        iconRight={{
          name: isDropped ? 'chevron-up' : 'chevron-down',
          size: dimensions.iconSize - 4,
          color: isSelected ? colors.green : colors.grey,
        }}
        leftIconStyle={s.leftIconStyle}
        rightIconStyle={s.rightIconStyle}
        multiline={false}
        pointerEvents="none"
        value={value}
        placeholder={disabled ? disabledPlaceholder : placeholder}
        placeholderColor={disabled ? colors.green : null}
      />
    </TouchableItem>
  );
};

FormInput.propTypes = {
  isDropped: T.bool,
  onPress: T.func,
  placeholder: T.string,
  disabledPlaceholder: T.string,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  value: T.string,
  isSelected: T.any,
  icon: T.object,
  label: T.string,
  labelStyle: Text.propTypes.style,
  disabled: T.bool,
};

export default FormInput;
