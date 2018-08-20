import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';

const Separator = ({
  withShadow,
  withOpacity,
  marginVertical,
  marginTop,
  marginBottom,
  style,
}) => (
  <View
    style={[
      s.root,
      marginVertical && { marginVertical },
      marginTop && { marginTop },
      marginBottom && { marginBottom },
      withShadow && s.shadow,
      withOpacity && s.opacity,
      style,
    ]}
  />
);
Separator.propTypes = {
  withShadow: T.bool,
  withOpacity: T.bool,
  marginVertical: T.number,
  marginTop: T.number,
  marginBottom: T.number,
  style: ViewPropTypes.style,
};

export default Separator;
