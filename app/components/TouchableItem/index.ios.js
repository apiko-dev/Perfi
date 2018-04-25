import T from 'prop-types';
import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';

const noop = () => {};

const Button = ({
  onPress = noop,
  onLongPress = noop,
  onLayout = noop,
  children,
  style,
  useOpacity = true,
  ...props
}) => {
  if (useOpacity) {
    return (
      <TouchableOpacity
        onLongPress={onLongPress}
        onLayout={onLayout}
        onPress={onPress}
        style={style}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableHighlight
      onLongPress={onLongPress}
      onLayout={onLayout}
      onPress={onPress}
      style={style}
      {...props}
    >
      {children}
    </TouchableHighlight>
  );
};

Button.defaultProps = {
  onPress: noop,
  onLongPress: noop,
  onLayout: noop,
};

Button.propTypes = {
  onPress: T.func,
  children: T.any,
  style: T.any,
  onLongPress: T.func,
  onLayout: T.func,
  useOpacity: T.bool,
};

export default Button;
