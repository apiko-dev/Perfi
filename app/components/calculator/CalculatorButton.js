import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../../styles/CalculatorButtonStyles';

const CalculatorButton = (props) => {
  const {
    token,
    title,
    onPress,
    buttonStyle,
    containerStyle,
    ...options
  } = props;

  const onPressButton = token ? () => onPress(token) : onPress;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Button
        {...options}
        buttonStyle={[styles.buttonStyle, buttonStyle]}
        title={token || title}
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
};

export default CalculatorButton;
