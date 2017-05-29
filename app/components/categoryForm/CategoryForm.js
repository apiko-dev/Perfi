import React, { PropTypes } from 'react';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import {
  FormInputWithIcon,
  IconsPickerModal,
  RoundButton,
  SceneContentWrapper,
  SelectBox,
} from '../';

const getLabel = value => value;

const CategoryForm = (props) => {
  const {
    icons,
    isValid,
    onSubmit,
    onChangeIcon,
    setName,
    icon,
    name,
    types,
    type,
    togglePicker,
    setType,
    isPickerVisible,
    style: { fixedButtonContainer, iconStyle, rowStyle, blockStyle },
  } = props;

  return (<SceneContentWrapper>
    <View style={blockStyle}>
      <View style={rowStyle}>
        <Icon
          name={icon}
          onPress={togglePicker}
          iconStyle={iconStyle}
          size={16}
          type="material-community"
          raised
        />
        <FormInputWithIcon
          value={name}
          onChangeText={setName}
        />
      </View>
      <SelectBox
        items={types}
        selectedValue={type}
        onValueChange={setType}
        getLabel={getLabel}
      />
    </View>
    {isValid && (
      <RoundButton
        style={fixedButtonContainer}
        onPress={onSubmit}
        iconName="check"
      />
    )}
    <IconsPickerModal
      icons={icons}
      onIconPick={onChangeIcon}
      isVisible={isPickerVisible}
      hideModal={togglePicker}
    />
  </SceneContentWrapper>);
};

CategoryForm.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.string,
  name: PropTypes.string,
  setName: PropTypes.func,
  type: PropTypes.string,
  setType: PropTypes.func,
  onChangeIcon: PropTypes.func,
  togglePicker: PropTypes.func,
  isPickerVisible: PropTypes.bool,
  types: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func,
  style: PropTypes.any,
  isValid: PropTypes.bool,
};

export default CategoryForm;
