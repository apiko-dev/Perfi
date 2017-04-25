import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/AddButtonStyles';

const AddButton = ({ style, color, ...props }) => (
  <View style={style}>
    <Button
      raised
      {...props}
      buttonStyle={styles.buttonStyle}
      icon={{
        name: 'add',
        size: 32,
        style: {
          marginRight: 0,
          color: color || 'white',
        },
      }}
    />
  </View>
);

AddButton.propTypes = {
  color: PropTypes.string,
  style: View.propTypes.style,
};

export default AddButton;
