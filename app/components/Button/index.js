import React from 'react';
import T from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from '../Text';
import s from './styles';

const Button = (props) => {
  const {
    backgroundColor,
    color,
    containerStyle,
    icon,
    iconRight,
    title,
    titleStyle,
    containerDisabled = s.disabled,
    ...touchableProps
  } = props;

  return (
    <TouchableOpacity
      style={[
        s.container,
        (!!icon || !!iconRight) && s.rowAligned,
        containerStyle,
        backgroundColor && { backgroundColor },
        touchableProps.disabled && containerDisabled,
      ]}
      {...touchableProps}
    >
      {!!icon && <MaterialIcons {...icon} />}
      <Text
        style={[
            s.title,
            titleStyle,
            !!icon && s.marginLeft,
            !!iconRight && s.marginRight,
            color && { color },
            touchableProps.disabled && s.titleDisabled,
          ]}
      >
        {title}
      </Text>
      {!!iconRight && <MaterialIcons {...iconRight} />}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  backgroundColor: T.string,
  color: T.string,
  colorDisabled: T.string,
  containerStyle: ViewPropTypes.style,
  containerDisabled: ViewPropTypes.style,
  icon: T.object,
  iconRight: T.object,
  title: T.string,
  titleStyle: Text.propTypes.style,
};

export default Button;
