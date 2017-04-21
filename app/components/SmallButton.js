import React, { PropTypes } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/ButtonsStyles';

const SmallButton = ({ icon, onPress }) => (<TouchableWithoutFeedback onPress={onPress}>
  <View style={styles.buttonWrapper}>
    <MaterialIcons name={icon} size={26} />
  </View>
</TouchableWithoutFeedback>);

SmallButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

export default SmallButton;
