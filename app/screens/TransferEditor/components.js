import React from 'react';
import { View } from 'react-native';
import { withProps } from 'recompose';
import {
  Input,
  Select,
  Icon,
} from '../../components';
import s from './styles';
import { dimensions } from '../../styles';


export const AccountSelect = withProps({
  isAccount: true,
  containerStyle: s.marginVertical,
  style: s.selector,
  defaultValue: 'Account',
  selectorsWidth: dimensions.containerWidth - dimensions.indent,
  textStyle: s.selectTextStyle,
  optionHeight: dimensions.verticalIndent * 2.8,
  selectedInputStile: s.selectedInputStile,
  selectedSecondInputContainer: s.selectedSecondInputContainer,
})(Select);

export const InputText = withProps({
  containerStyle: s.marginVertical,
  secondContainerStyle: s.containerInputStyle,
  style: s.inputText,
})(Input);

export const IconArrowDown = withProps({
  name: 'arrow_down',
  width: 40,
  height: 40,
})(Icon);

export const TwoArrowDown = props => (
  <View style={s.containerIcon}>
    <IconArrowDown {...props} />
    <IconArrowDown {...props} />
  </View>
);
