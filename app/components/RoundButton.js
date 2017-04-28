import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/RoundButtonStyles';

const RoundButton = ({ style, iconName, color, ...props }) => (
  <View style={style}>
    <Button
      raised
      {...props}
      buttonStyle={styles.buttonStyle}
      icon={{
        name: iconName,
        size: 32,
        style: {
          marginRight: 0,
          color: color || 'white',
        },
      }}
    />
  </View>
);

RoundButton.propTypes = {
  color: PropTypes.string,
  iconName: PropTypes.string,
  style: View.propTypes.style,
};

export default RoundButton;
