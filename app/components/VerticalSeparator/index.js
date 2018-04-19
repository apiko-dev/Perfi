import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';

const VerticalSeparator = ({ height = 20, style }) => (
  <View style={[s.separator, style, { height }]} />
);

VerticalSeparator.propTypes = {
  height: PropTypes.number,
  style: ViewPropTypes.style,
};

export default VerticalSeparator;
