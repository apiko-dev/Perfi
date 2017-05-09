import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/ButtonsStyles';

const { buttonWrapperStyle, buttonWrapperStyleRaised, buttonWrapperStyleBig } = styles;

const Button = ({ icon, onPress, isRaised, isBig, iconsSet: IconsSet }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      buttonWrapperStyle,
      isBig && buttonWrapperStyleBig,
      isRaised && buttonWrapperStyleRaised,
    ]}
  >
    <IconsSet
      name={icon}
      size={26}
    />
  </TouchableOpacity>
);

Button.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  isRaised: PropTypes.bool,
  isBig: PropTypes.bool,
  iconsSet: PropTypes.func,
};

Button.defaultProps = {
  iconsSet: MaterialIcons,
};

export default Button;
