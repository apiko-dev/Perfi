import React from 'react';
import T from 'prop-types';
import { TouchableOpacity, ViewPropTypes, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import R from 'ramda';
import Input from '../Input';
import Text from '../Text';
import NavIcon from '../NavIcon';
import s from './styles';
import { colors, dimensions } from '../../styles';


const getOptionText = (option, keyToRender) =>
  (R.is(String, option) ? option : R.propOr('', keyToRender, option));
const getAccountColor = option => R.propOr('', 'color', option);

const getOptionStyle = (isSelected, defaultValue, text) => {
  if (isSelected && (isSelected === text || isSelected.name === text)) {
    return [s.selectedOption, s.selectedOptionText];
  } else if (!isSelected && defaultValue && defaultValue === text) {
    return [s.selectedOption, s.selectedOptionText];
  }
  return [null, null];
};


const renderRow = (
  height,
  keyToRender,
  isSelected,
  defaultValue,
  textStyle,
  isAccount,
) => (option) => {
  const text = getOptionText(option, keyToRender);
  const style = getOptionStyle(isSelected, defaultValue, text);

  return (
    <TouchableOpacity style={[s.option, { height }, style[0]]}>
      {isAccount &&
        <View style={s.optionIcon}>
          <NavIcon
            tintColor={option.color}
            name="circle"
            size={dimensions.iconSize}
          />
        </View>
      }
      <Text style={[s.optionText, textStyle, style[1]]}>{text}</Text>
    </TouchableOpacity>
  );
};

const renderIcon = (icon, isDropped) => {
  if (icon) {
    if (isDropped) {
      return {
        ...icon,
        color: colors.grey,
      };
    }
    return icon;
  }
  return null;
};


const renderAccountIcon = (icon, isSelected) => {
  if (isSelected) {
    return {
      name: 'circle',
      size: dimensions.iconSize,
      color: getAccountColor(isSelected),
    };
  } return null;
};


const renderSeparator = () => null;

const Select = (props) => {
  const {
    isAccount,
    isDropped,
    maxOptionsToDisplay,
    onDropped,
    onSelect,
    onSetOptionWidth,
    optionHeight,
    selectorsWidth,
    selectedInputStile = s.selectedInputStile,
    selectedSecondInputContainer = s.selectedSecondInputContainer,
    options,
    keyToRender,
    placeholder,
    disabledPlaceholder,
    style,
    textStyle,
    containerStyle,
    defaultValue,
    isSelected,
    changeStyleIsSelected = true,
    icon,
    label,
    labelStyle,
    isShowScroll,
    disabled = false,
  } = props;

  return (
    <View style={containerStyle}>
      {!!label && <Text style={[s.label, labelStyle]}>{label}</Text>}
      <ModalDropdown
        disabled={disabled}
        dropdownStyle={[
          s.select,
          {
            height: optionHeight * R.min(
              options.length, maxOptionsToDisplay,
            ),
            width: selectorsWidth,
          },
        ]}
        onDropdownWillHide={onDropped}
        onDropdownWillShow={onDropped}
        onLayout={onSetOptionWidth}
        onSelect={onSelect}
        options={options}
        showsVerticalScrollIndicator={isShowScroll}
        renderRow={
          renderRow(optionHeight, keyToRender, isSelected, defaultValue, textStyle, isAccount)
        }
        renderSeparator={renderSeparator}
      >
        <Input
          editable={false}
          containerStyle={style}
          secondContainerStyle={[s.secondInputContainer, disabled && {
            backgroundColor: colors.grey,
          }, isSelected && changeStyleIsSelected && selectedSecondInputContainer]}
          style={[
            s.inputStyle,
            textStyle,
            isSelected && changeStyleIsSelected && selectedInputStile,
          ]}
          isValid
          icon={isAccount ? renderAccountIcon(icon, isSelected) : renderIcon(icon, isDropped)}

          iconRight={{
            name: isDropped ? 'chevron-up' : 'chevron-down',
            size: dimensions.iconSize - 4,
            color: isSelected && changeStyleIsSelected ? colors.green : colors.grey,
          }}
          rightIconStyle={s.rightIconStyle}
          leftIconStyle={s.leftIconStyle}
          multiline={false}
          pointerEvents="none"
          value={getOptionText(isSelected || defaultValue, keyToRender)}
          placeholder={disabled ? disabledPlaceholder : placeholder}
          placeholderColor={disabled ? colors.gray : null}
        />
      </ModalDropdown>
    </View>
  );
};

Select.propTypes = {
  isDropped: T.bool,
  isAccount: T.bool,
  changeStyleIsSelected: T.bool,
  maxOptionsToDisplay: T.number,
  onDropped: T.func,
  onSelect: T.func,
  onSetOptionWidth: T.func,
  optionHeight: T.number,
  selectorsWidth: T.number,
  options: T.array,
  placeholder: T.string,
  disabledPlaceholder: T.string,
  style: ViewPropTypes.style,
  textStyle: T.any,
  containerStyle: ViewPropTypes.style,
  defaultValue: T.oneOfType([T.string, T.object]),
  isSelected: T.any,
  selectedInputStile: ViewPropTypes.style,
  selectedSecondInputContainer: ViewPropTypes.style,
  keyToRender: T.string,
  icon: T.object,
  label: T.string,
  labelStyle: Text.propTypes.style,
  isShowScroll: T.bool,
  disabled: T.bool,
};

export default Select;
