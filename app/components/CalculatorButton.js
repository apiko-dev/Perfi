import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/CalculatorButtonStyles';

const CalculatorButton = (props) => {
  const {
    title,
    token,
    onPressToken,
    onPress,
    buttonStyle,
    containerStyle,
    ...options
  } = props;

  const onPressButton = onPressToken ? () => onPressToken(token) : onPress;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Button
        {...options}
        buttonStyle={[styles.buttonStyle, buttonStyle]}
        title={title || token}
        onPress={onPressButton}
      />
    </View>
  );
};

CalculatorButton.propTypes = {
  containerStyle: View.propTypes.style,
  buttonStyle: View.propTypes.style,
  title: PropTypes.string,
  token: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  onPressToken: PropTypes.func,
};

export default CalculatorButton;
