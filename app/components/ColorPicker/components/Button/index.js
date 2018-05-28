import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import T from 'prop-types';

import s from './styles';

const Button = ({ title, ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={s.button}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: T.string,
};

export default Button;
