import React from 'react';
import T from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from '../index';
import s, { getSize } from './styles';

const Button = ({ title, ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={s.button}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: T.string,
};

const Item = ({ color, isSelected, ...props }) => (
  <TouchableOpacity
    style={[
      s.item,
      isSelected && s.isSelected,
      { backgroundColor: color },
    ]}
    {...props}
  />
);

Button.propTypes = {
  color: T.string,
  isSelected: T.bool,
};


const ColorPicker = ({
  isVisible,
  onColorSelected,
  defaultColor,
  onBackdropPress,
}) => (
  <Modal
    animationIn="fadeIn"
    animationOut="fadeOut"
    style={s.root}
    isVisible={isVisible}
    onBackdropPress={onBackdropPress}
  >
    <View style={s.container}>
      <View style={s.containerTitle}>
        <Text style={s.title}>Notification Color</Text>
      </View>
      <View style={s.containerContent}>
        <Item color="green" />
      </View>
      <View style={s.containerButton}>
        <Button title="CANCEL" onPress={() => null} />
        <Button title="OK" onPress={() => null} />
      </View>
    </View>
  </Modal>
);

ColorPicker.propTypes = {
  defaultColor: T.string,
  isVisible: T.bool,
  onColorSelected: T.func,
  onBackdropPress: T.func,
};

export default ColorPicker;
