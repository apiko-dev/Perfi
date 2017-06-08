import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginLeft: 5,
    marginRight: 5,
  },
});

const CustomIcon = ({ name, style, color }) => (
  <Icon
    name={name}
    iconStyle={[styles.iconStyle, style]}
    type="material-community"
    color={color}
  />
);

CustomIcon.propTypes = {
  name: PropTypes.string,
  style: Icon.propTypes.iconStyle,
  color: PropTypes.string,
};

const TextWithIcons = (props) => {
  const {
    leftIcon,
    leftIconStyle,
    rightIcon,
    rightIconStyle,
    text,
    textStyle,
    color = colors.primaryText,
    containerStyle,
  } = props;
  
  return (
    <View style={[styles.rootStyle, containerStyle]}>
      {leftIcon && (
        <CustomIcon
          name={leftIcon}
          style={leftIconStyle}
          color={color}
        />
      )}
      <Text style={[textStyle, { color }]}>
        {text}
      </Text>
      {rightIcon && (
        <CustomIcon
          name={rightIcon}
          style={rightIconStyle}
          color={color}
        />
      )}
    </View>
  );
};

TextWithIcons.propTypes = {
  leftIcon: PropTypes.string,
  leftIconStyle: View.propTypes.style,
  rightIcon: PropTypes.string,
  rightIconStyle: View.propTypes.style,
  text: PropTypes.string,
  textStyle: Text.propTypes.style,
  color: PropTypes.string,
  containerStyle: View.propTypes.style,
};

export default TextWithIcons;
