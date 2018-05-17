import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import Modal from 'react-native-modal';
import { ColorPicker } from 'react-native-color-picker';
import { getParam } from '../../utils/navHelpers';
import DeleteButton from './DeleteButton';
import {
  Input,
  Button,
  Text,
  KeyboardAvoidingView,
  DatePicker,
  ScreenWrapper,
  HeaderTitle,
} from '../../components/index';
import s from './styles';

const AccountEditor = ({
  name,
  date,
  onSubmit,
  isValid,
  initialBalance,
  onNameChange,
  onDateChange,
  onChangeBalance,
  onToggleColorPicker,
  isColorPickerVisible,
  onSelectColor,
  icon,
  color,
}) => (
  <View style={s.root}>
    <ScreenWrapper>
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={isColorPickerVisible}
        onBackdropPress={onToggleColorPicker}
      >
        <ColorPicker
          style={s.modal}
          onColorSelected={onSelectColor}
          defaultColor={color}
          hideSliders
        />
      </Modal>

      <View style={s.container}>
        <View style={s.secondContainer}>
          <TouchableOpacity
            onPress={onToggleColorPicker}
            style={[s.colorPickerContainer, { backgroundColor: color }]}
          />
          <Text style={s.label}>Choose color</Text>
        </View>

        <Input
          isValid
          placeholder="Account name"
          value={name}
          onChangeText={onNameChange}
          containerStyle={s.root}
        />
      </View>

      <Input
        isValid
        placeholder="Initial balance"
        value={initialBalance ? initialBalance.toString() : ''}
        onChangeText={onChangeBalance}
        keyboardType="phone-pad"
        containerStyle={s.balanceContainer}
        iconRight={icon}
      />

      <DatePicker
        placeholder="Initial date"
        onSelectDate={onDateChange}
        defaultValue={date}
      />

    </ScreenWrapper>


    <KeyboardAvoidingView withHeader>
      {isValid &&
      <Button
        secondaryOpacity
        title="Save"
        onPress={onSubmit}
      />
      }
    </KeyboardAvoidingView>

  </View>


);

AccountEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('account')(navigation) ? 'Edit account' : 'New account'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

AccountEditor.propTypes = {
  name: T.string,
  date: T.any,
  onSubmit: T.func,
  isValid: T.bool,
  initialBalance: T.number,
  onNameChange: T.func,
  onDateChange: T.func,
  onChangeBalance: T.func,
  onToggleColorPicker: T.func,
  isColorPickerVisible: T.bool,
  onSelectColor: T.func,
  icon: T.object,
  color: T.string,
};

export default AccountEditor;
