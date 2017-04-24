import React, { PropTypes } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/ButtonsStyles';

const SmallButton = ({ icon, onPress, raised }) => (<TouchableWithoutFeedback onPress={onPress}>
  <View style={[styles.buttonWrapper, raised && styles.buttonWrapper__raised]}>
    <MaterialIcons name={icon} size={26} />
  </View>
</TouchableWithoutFeedback>);

SmallButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  raised: PropTypes.bool,
};

export default SmallButton;
