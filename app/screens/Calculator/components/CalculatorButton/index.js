import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Button } from '../../../../components/index';
import colors from '../../../../styles/colors';
import s from './styles';

const defaultIconProps = {
  style: { marginRight: 0 },
  color: colors.secondaryText,
  size: 24,
};

const CalculatorButton = (props) => {
  const {
    buttonStyle,
    containerStyle,
    token,
    icon,
    onPress,
    ...options
  } = props;

  const title = {
    [icon ? 'icon' : 'title']: icon ? { ...defaultIconProps, ...icon } : token,
  };

  return (
    <View style={[s.containerStyle, containerStyle]}>
      <Button
        {...options}
        {...title}
        disabled={token === ''}
        style={[s.buttonStyle, buttonStyle]}
        titleStyle={s.buttonTextStyle}
        color={colors.primaryText}
        onPress={() => onPress(token)}
      />
    </View>
  );
};

CalculatorButton.propTypes = {
  containerStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  title: PropTypes.string,
  token: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.object,
  onPress: PropTypes.func,
};

export default CalculatorButton;
