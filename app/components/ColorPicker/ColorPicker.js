import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from '../index';
import s from './styles';
import { chartPalette } from '../../styles/colors';
import { Button, Item } from './components';

const arrChartPalette = Object.values(chartPalette);

const ColorPicker = ({
  isVisible,
  onBackdropPress,
  onSelectColor,
  selectedColor,
  setSelectedColor,
}) => (
  <Modal
    animationIn="fadeIn"
    animationOut="fadeOut"
    style={s.root}
    isVisible={isVisible}
    onBackdropPress={onBackdropPress}
  >
    <View style={s.container}>
      <View style={s.secondContainer}>
        <View style={s.containerTitle}>
          <Text style={s.title}>Pick Color</Text>
        </View>
        <View style={s.containerContent}>
          <View style={s.secondContainerContent}>
            {arrChartPalette.map(item => (
              <Item
                key={item}
                color={item}
                onPress={setSelectedColor}
                isSelected={selectedColor === item}
              />
            ))}
          </View>
        </View>
        <View style={s.containerButton}>
          <Button title="CANCEL" onPress={onBackdropPress} />
          <Button title="OK" onPress={() => onSelectColor(selectedColor)} />
        </View>
      </View>
    </View>
  </Modal>
);

ColorPicker.propTypes = {
  isVisible: T.bool,
  selectedColor: T.oneOf([...arrChartPalette, '']),
  setSelectedColor: T.func,
  onSelectColor: T.func,
  onBackdropPress: T.func,
};

export default ColorPicker;
