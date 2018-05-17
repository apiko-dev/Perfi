import React from 'react';
import { TouchableOpacity, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import SvgIcon from 'react-native-svg-icon';
import R from 'ramda';
import svgs from '../../assets/svgs';
import { colors } from '../../styles';

const Icon = (props) => {
  const {
    containerStyle, onPress, color, ...icon
  } = props;
  const Root = R.is(Function, onPress) ? TouchableOpacity : View;

  return (
    <Root
      onPress={onPress}
      style={containerStyle}
    >
      <SvgIcon
        width={14}
        height={14}
        fill={color || colors.icon}
        {...icon}
        svgs={svgs}
      />
    </Root>
  );
};

Icon.propTypes = {
  containerStyle: ViewPropTypes.style,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export default Icon;
