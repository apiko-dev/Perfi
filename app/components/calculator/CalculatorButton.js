import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../../styles/colors';
import styles from './CalculatorButtonStyles';

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
    <View style={[styles.containerStyle, containerStyle]}>
      <Button
        {...options}
        {...title}
        buttonStyle={[styles.buttonStyle, buttonStyle]}
        fontSize={18}
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
