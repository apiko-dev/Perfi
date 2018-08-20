import React from 'react';
import T from 'prop-types';
import { ViewPropTypes, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from '../Text';
import TouchableItem from '../TouchableItem';
import s from './styles';

const Button = props => {
  const {
    backgroundColor,
    color,
    containerStyle,
    icon,
    iconRight,
    title,
    titleStyle,
    containerDisabled = s.disabled,
    isActive = false,
    activeBackgroundColor,
    activeColor,
    ...touchableProps
  } = props;

  return (
    <TouchableItem
      style={[
        s.container,
        (!!icon || !!iconRight) && s.rowAligned,
        containerStyle,
        backgroundColor && { backgroundColor },
        isActive && activeBackgroundColor,
        touchableProps.disabled && containerDisabled,
      ]}
      {...touchableProps}
    >
      <View>
        {!!icon && <MaterialIcons {...icon} />}
        {!!title && <Text
          style={[
            s.title,
            titleStyle,
            !!icon && s.marginLeft,
            !!iconRight && s.marginRight,
            color && { color },
            isActive && { color: activeColor },
            touchableProps.disabled && s.titleDisabled,
          ]}
        >
            {title}
        </Text>}
        {!!iconRight && <MaterialIcons {...iconRight} />}
      </View>

    </TouchableItem>
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
  isActive: T.bool,
  activeBackgroundColor: ViewPropTypes.style,
  activeColor: T.string,
};

export default Button;
