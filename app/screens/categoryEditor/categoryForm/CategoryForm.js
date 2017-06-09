import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';
import {
  ActionButton,
  CategoryTypeSelector,
  IconsPickerModal,
} from '../../../components';
import appStyles from '../../../styles/AppStyles';

const CategoryForm = (props) => {
  const {
    icons,
    isValid,
    onSubmit,
    onChangeIcon,
    setName,
    icon,
    name,
    type,
    togglePicker,
    setType,
    isPickerVisible,
  } = props;

  return (
    <View style={[appStyles.rootStyle, appStyles.containerStyle, appStyles.withMarginTop]}>
      <View style={appStyles.rowStyle}>
        <Icon
          name={icon}
          onPress={togglePicker}
          iconStyle={appStyles.iconStyle}
          size={16}
          type="material-community"
          raised
        />
        <FormInput
          inputStyle={appStyles.formInputStyle}
          value={name}
          onChangeText={setName}
        />
      </View>
      <CategoryTypeSelector
        currentType={type}
        onSelect={setType}
      />
      {isValid && (
        <ActionButton
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
    </View>
  );
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
  onSubmit: PropTypes.func,
  isValid: PropTypes.bool,
};

export default CategoryForm;
