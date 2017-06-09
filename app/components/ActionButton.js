import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    position: 'absolute',
    right: 0,
    bottom: 15,
  },
  buttonStyle: {
    width: 48,
    height: 48,
    padding: 2,
    borderRadius: 24,
    backgroundColor: colors.accent,
  },
});

const ActionButton = ({ style, iconName, color, ...props }) => (
  <View style={style || styles.rootStyle}>
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

ActionButton.propTypes = {
  color: PropTypes.string,
  iconName: PropTypes.string,
  style: View.propTypes.style,
};

export default ActionButton;
