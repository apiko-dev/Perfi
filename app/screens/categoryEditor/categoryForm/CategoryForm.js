import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';
import {
  ActionButton,
  CategoryTypeSelector,
  Card,
  IconsPickerModal,
  PickerIcon,
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
    <View style={appStyles.rootStyle}>
      <Card>
        <View style={[appStyles.rowStyle, appStyles.withMarginBottom]}>
          <PickerIcon
            name={icon}
            onPress={togglePicker}
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
      </Card>
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
