import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import colors from '../styles/colors';

const SecondaryText = ({ children, style, ...props }) => (
  <Text {...props} style={[style, { color: colors.secondaryText }]}>
    {children}
  </Text>
);

SecondaryText.propTypes = {
  children: PropTypes.string,
  style: Text.propTypes.style,
};

export default SecondaryText;
